import { useState, useEffect } from 'react';

import type { Task } from 'types/task';

import { v4 as uuid } from 'uuid';

type TaskHook = [
    {
        list: Task[];
        add: Function;
        remove: Function;
        toggleComplete: Function;
        clear: Function;
        clearComplete: Function;
    },
    {
        list: string[];
        current: string;
        setCurrent: Function;
    },
    {
        value: string;
        set: Function;
    }
];

export const useTasks = (initialTasks: Task[]): TaskHook => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const [filters] = useState<string[]>(['All', 'Active', 'Complete']);
    const [currentFilter, setCurrentFilter] = useState('All');
    const [filteredTasks, setFilteredTasks] = useState([...tasks]);

    const [search, setSearch] = useState('');
    const [searchedTasks, setSearchedTasks] = useState([...filteredTasks]);

    const createTask = (taskName: string): Task => {
        return {
            id: uuid(),
            name: taskName,
            complete: false,
        };
    };

    const addTask = (newTask: Task): Task => {
        setTasks([...tasks, newTask]);

        return newTask;
    };

    const addNewTask = (taskName: string): Task => {
        return addTask(createTask(taskName));
    };

    const removeTask = (removedTask: Task): Task => {
        setTasks(
            tasks.filter((task) => {
                return task !== removedTask;
            })
        );

        return removedTask;
    };

    const toggleCompleteTask = (toggledTask: Task): Task => {
        setTasks(
            tasks.map((task) => {
                if (task === toggledTask) task.complete = !task.complete;
                return task;
            })
        );

        return toggledTask;
    };

    const removeAllTasks = (): Task[] => {
        const removedTasks = [...tasks];
        setTasks([]);
        return removedTasks;
    };

    const removeCompleteTasks = (): Task[] => {
        const removedTasks = tasks.filter((task) => {
            return task.complete;
        });

        setTasks(
            tasks.filter((task) => {
                return !task.complete;
            })
        );

        return removedTasks;
    };

    useEffect(() => {
        setFilteredTasks(
            tasks.filter((task) => {
                switch (currentFilter) {
                    case 'All':
                        return true;
                    case 'Active':
                        return !task.complete;
                    case 'Complete':
                        return task.complete;
                }
            })
        );
    }, [tasks, currentFilter]);

    useEffect(() => {
        setSearchedTasks(
            filteredTasks.filter((task) => {
                return task.name.toLowerCase().includes(search.toLowerCase());
            })
        );
    }, [filteredTasks, search]);

    return [
        {
            list: searchedTasks,
            add: addNewTask,
            remove: removeTask,
            toggleComplete: toggleCompleteTask,
            clear: removeAllTasks,
            clearComplete: removeCompleteTasks,
        },
        {
            list: filters,
            current: currentFilter,
            setCurrent: setCurrentFilter,
        },
        {
            value: search,
            set: setSearch,
        },
    ];
};
