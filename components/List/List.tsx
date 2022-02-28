import styles from './List.module.css';

import type { Task } from 'types/task';

import Item from 'components/Item';

type Props = {
    tasks: Task[];
    toggleCompleteTask: (taskToToggle: Task) => void;
    removeTask: (taskToRemove: Task) => void;
};

const List = ({ tasks, toggleCompleteTask, removeTask }: Props) => {
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
