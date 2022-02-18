import styles from './TodoItem.module.css';

import { Todo } from 'types/Todo';

type TodoProps = {
    todo: Todo;
    toggleCompleted: Function;
    remove: Function;
};

const TodoItem = ({ todo, toggleCompleted, remove }: TodoProps) => {
    return (
        <li
            className={`${styles.todoItem} ${todo.hidden ? styles.hidden : ''}`}
        >
            <button onClick={() => toggleCompleted(todo)}>Complete</button>
            <p
                className={`${styles.todoText} ${
                    todo.completed ? styles.completed : ''
                }`}
            >
                {todo.text}
            </p>
            <button onClick={() => remove(todo)}>X</button>
        </li>
    );
};

export default TodoItem;
