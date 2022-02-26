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
                <AddItemForm addItem={tasks.add} />
            </section>
            <section className={styles.section}>
                <ListOptions
                    filters={filter.list}
                    currentFilter={filter.current}
                    setFilter={filter.setCurrent}
                    search={search.value}
                    setSearch={search.set}
                    removeAll={tasks.clear}
                    removeComplete={tasks.clearComplete}
                />
            </section>
            <section className={styles.section}>
                <List
                    items={tasks.list}
                    toggleCompleteItem={tasks.toggleComplete}
                    removeItem={tasks.remove}
                />
            </section>
        </>
    );
};

export default App;
