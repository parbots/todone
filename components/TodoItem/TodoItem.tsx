import styles from './TodoItem.module.css';

import { Todo } from 'types/Todo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
                    {!todo.completed && (
                        <FontAwesomeIcon
                            icon={faCircle}
                            size='3x'
                            fixedWidth
                            className={styles.completeIcon}
                            data-complete='false'
                        />
                    )}
                    {todo.completed && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            size='3x'
                            fixedWidth
                            className={styles.completeTodoIcon}
                            data-complete='true'
                        />
                    )}
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
                <FontAwesomeIcon
                    icon={faXmark}
                    size='3x'
                    fixedWidth
                    className={styles.removeTodoIcon}
                />
            </button>
        </li>
    );
};

export default TodoItem;
