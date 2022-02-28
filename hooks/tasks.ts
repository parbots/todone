import { useState, useEffect } from 'react';

import type { Task, Filter } from 'types/task';

import { v4 as uuid } from 'uuid';

type TaskHook = (initialTasks: Task[]) => {
    all: Task[];
    setAll: (tasks: Task[]) => void;
    add: (taskToAdd: Task | string) => Task;
    remove: (taskToRemove: Task) => Task;
    toggleComplete: (taskToToggle: Task) => Task;
    clear: () => Task[];
    clearComplete: () => Task[];
    filtered: Task[];
    filter: Filter;
    setFilter: (newFilter: Filter) => void;
    searched: Task[];
    search: string;
    setSearch: (newSearch: string) => void;
};

export const useTasks: TaskHook = (initialTasks) => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filter, setFilter] = useState<Filter>('All');
    const [filteredTasks, setFilteredTasks] = useState([...tasks]);

    const [search, setSearch] = useState<string>('');
    const [searchedTasks, setSearchedTasks] = useState([...filteredTasks]);

    const createTask = (newTaskName: string): Task => {
        return {
            id: uuid(),
            name: newTaskName,
            complete: false,
        };
    };

    const addTask = (taskToAdd: Task | string): Task => {
        if (typeof taskToAdd === 'string') {
            const createdTask = createTask(taskToAdd);

            setTasks([...tasks, createdTask]);

            return createdTask;
        }

        setTasks([...tasks, taskToAdd]);

        return taskToAdd;
    };

    const removeTask = (taskToRemove: Task): Task => {
        setTasks(
            tasks.filter((task) => {
                return task !== taskToRemove;
            })
        );

        return taskToRemove;
    };

    const toggleCompleteTask = (taskToToggle: Task): Task => {
        setTasks(
            tasks.map((task) => {
                if (task === taskToToggle) task.complete = !task.complete;
                return task;
            })
        );

        return taskToToggle;
    };

    const clearTasks = (): Task[] => {
        const removedTasks = [...tasks];
        setTasks([]);
        return removedTasks;
    };

    const clearCompleteTasks = (): Task[] => {
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
                switch (filter) {
                    case 'All':
                        return true;
                    case 'Active':
                        return !task.complete;
                    case 'Complete':
                        return task.complete;
                }
            })
        );
    }, [tasks, filter]);

    useEffect(() => {
        setSearchedTasks(
            filteredTasks.filter((task) => {
                return task.name.toLowerCase().includes(search.toLowerCase());
            })
        );
    }, [filteredTasks, search]);

    return {
        all: tasks,
        setAll: setTasks,
        add: addTask,
        remove: removeTask,
        toggleComplete: toggleCompleteTask,
        clear: clearTasks,
        clearComplete: clearCompleteTasks,

        filtered: filteredTasks,
        filter: filter,
        setFilter: setFilter,

        searched: searchedTasks,
        search: search,
        setSearch: setSearch,
    };
};
