import styles from './App.module.css';

import { useEffect } from 'react';

import { useTasks } from 'hooks/tasks';

import AddItemForm from 'components/AddItemForm';
import List from 'components/List';
import ListOptions from 'components/ListOptions';

const App = () => {
    const tasks = useTasks([]);

    useEffect(() => {
        const tasksString = localStorage.getItem('tasks');

        if (tasksString) {
            const parsedTasks = JSON.parse(tasksString);

            if (parsedTasks) {
                tasks.setAll(parsedTasks);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks.all));
    }, [tasks.all]);

    return (
        <>
            <section className={styles.sections}>
                <AddItemForm addNewTask={tasks.add} />
            </section>
            <section className={styles.section}>
                <ListOptions
                    currentFilter={tasks.filter}
                    setCurrentFilter={tasks.setFilter}
                    searchValue={tasks.search}
                    setSearchValue={tasks.setSearch}
                    clearTasks={tasks.clear}
                    clearCompleteTasks={tasks.clearComplete}
                />
            </section>
            <section className={styles.section}>
                <List
                    tasks={tasks.searched}
                    toggleCompleteTask={tasks.toggleComplete}
                    removeTask={tasks.remove}
                />
            </section>
        </>
    );
};

export default App;
