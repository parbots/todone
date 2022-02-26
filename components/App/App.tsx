import styles from './App.module.css';

import AddItemForm from 'components/AddItemForm';
import List from 'components/List';
import ListOptions from 'components/ListOptions';

import { useTasks } from '../../hooks/tasks';

const App = () => {
    const [tasks, filter, search] = useTasks([]);

    return (
        <>
            <section className={styles.sections}>
                <AddItemForm addNewTask={tasks.add} />
            </section>
            <section className={styles.section}>
                <ListOptions
                    filters={filter.list}
                    currentFilter={filter.current}
                    setFilter={filter.setCurrent}
                    search={search.value}
                    setSearch={search.set}
                    clearTasks={tasks.clear}
                    clearCompleteTasks={tasks.clearComplete}
                />
            </section>
            <section className={styles.section}>
                <List
                    tasks={tasks.list}
                    toggleCompleteTask={tasks.toggleComplete}
                    removeTask={tasks.remove}
                />
            </section>
        </>
    );
};

export default App;
