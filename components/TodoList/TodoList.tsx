import styles from './TodoList.module.css';

import { FC } from 'react';

const TodoList: FC = ({ children }) => {
    return <ul className={styles.todoList}>{children}</ul>;
};

export default TodoList;
