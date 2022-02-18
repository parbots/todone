import styles from './TodoItem.module.css';

import { Todo } from 'types/Todo';

type TodoProps = {
    todo: Todo;
    complete: Function;
    remove: Function;
};

const TodoItem = ({ todo, complete, remove }: TodoProps) => {
    return (
        <li
            className={`${styles.todoItem} ${
                todo.hidden ? styles.hidden : styles.shown
            }`}
        >
            <div className={styles.todoLeft}>
                <button
                    onClick={() => complete(todo)}
                    className={styles.completeTodoButton}
                >
                    Complete
                </button>
                <p
                    className={`${styles.todoText} ${
                        todo.completed ? styles.completedText : ''
                    }`}
                >
                    {todo.text}
                </p>
            </div>
            <button
                onClick={() => remove(todo)}
                className={styles.removeTodoButton}
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
