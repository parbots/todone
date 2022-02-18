import styles from './TodoList.module.css';

import { ReactNode } from 'react';

type ListProps = {
    children: ReactNode;
};

const TodoList = ({ children }: ListProps) => {
    return <ul className={styles.todoList}>{children}</ul>;
};

export default TodoList;
