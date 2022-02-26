import styles from './List.module.css';

import { Task } from 'types/task';

import Item from 'components/Item';

type ListProps = {
    tasks: Task[];
    toggleCompleteTask: Function;
    removeTask: Function;
};

const List = ({ tasks, toggleCompleteTask, removeTask }: ListProps) => {
    return (
        <ul className={styles.list}>
            {tasks.map((task) => {
                return (
                    <Item
                        key={task.id}
                        name={task.name}
                        complete={task.complete}
                        toggleCompleteSelf={() => toggleCompleteTask(task)}
                        removeSelf={() => removeTask(task)}
                    />
                );
            })}
        </ul>
    );
};

export default List;
