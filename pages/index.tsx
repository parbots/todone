import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import { useState } from 'react';

import { Todo } from 'types/Todo';

import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import Header from 'components/Header';
import Footer from 'components/Footer';

const HomePage: NextPage = () => {
    const [todoId, setTodoId] = useState(0);
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos([
            ...todos,
            {
                id: todoId,
                text: text,
                completed: false,
                hidden: false,
            },
        ]);

        setTodoId(todoId + 1);
    };

    const removeTodo = (todoToRemove: Todo) => {
        const newTodos = todos.filter((todo) => {
            return todoToRemove !== todo;
        });

        setTodos([...newTodos]);
    };

    const toggleCompleteTodo = (todo: Todo) => {
        let todosCopy = [...todos];
        const todoIndex = todosCopy.indexOf(todo);
        todosCopy[todoIndex].completed = !todosCopy[todoIndex].completed;
        setTodos([...todosCopy]);
    };

    const showAllTodos = () => {
        const newTodos = todos.map((todo) => {
            todo.hidden = false;
            return todo;
        });

        setTodos([...newTodos]);
    };

    const showActiveTodos = () => {
        const newTodos = todos.map((todo) => {
            todo.completed ? (todo.hidden = true) : (todo.hidden = false);
            return todo;
        });

        setTodos([...newTodos]);
    };

    const showCompletedTodos = () => {
        const newTodos = todos.map((todo) => {
            todo.completed ? (todo.hidden = false) : (todo.hidden = true);
            return todo;
        });

        setTodos([...newTodos]);
    };

    const removeCompletedTodos = () => {
        const newTodos = todos.filter((todo) => {
            return !todo.completed;
        });

        setTodos([...newTodos]);
    };

    const todoItems = todos.map((todo) => {
        return (
            <li
                key={todo.id}
                className={`${styles.todoItem} ${
                    todo.hidden ? styles.hidden : ''
                }`}
            >
                <button
                    onClick={() => {
                        toggleCompleteTodo(todo);
                    }}
                >
                    Complete
                </button>
                <p
                    className={`${styles.todoText} ${
                        todo.completed ? styles.completed : ''
                    }`}
                >
                    {todo.text}
                </p>
                <button
                    onClick={() => {
                        removeTodo(todo);
                    }}
                >
                    X
                </button>
            </li>
        );
    });

    return (
        <div className={styles.page}>
            <Head>
                <title>ToDone</title>
                <meta name='description' content='Go from do to done.' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />
            <main className={styles.main}>
                <TodoForm addTodo={addTodo} />
                <section className={styles.listOptions}>
                    <div className={styles.listFilters}>
                        <p className={styles.filterText}>Show:</p>
                        <button
                            onClick={showAllTodos}
                            className={styles.filterButton}
                        >
                            All
                        </button>
                        <button
                            onClick={showActiveTodos}
                            className={styles.filterButton}
                        >
                            Active
                        </button>
                        <button
                            onClick={showCompletedTodos}
                            className={styles.filterButton}
                        >
                            Complete
                        </button>
                    </div>
                    <button
                        onClick={removeCompletedTodos}
                        className={styles.clearCompleteButton}
                    >
                        Clear Complete
                    </button>
                </section>
                <section className={styles.todoListSection}>
                    <TodoList>{todoItems}</TodoList>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
