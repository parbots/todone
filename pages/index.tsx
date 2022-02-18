import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import { useState } from 'react';

import { Todo } from 'types/Todo';

import TodoForm from 'components/TodoForm';
import TodoList from 'components/TodoList';
import Header from 'components/Header';
import Footer from 'components/Footer';
import TodoOptions from 'components/TodoOptions';

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
        setTodos(todos.filter((todo) => todoToRemove !== todo));
    };

    const toggleCompleteTodo = (todo: Todo) => {
        let todosCopy = [...todos];
        const todoIndex = todosCopy.indexOf(todo);
        todosCopy[todoIndex].completed = !todosCopy[todoIndex].completed;
        setTodos([...todosCopy]);
    };

    const showAllTodos = () => {
        setTodos(
            todos.map((todo) => {
                todo.hidden = false;
                return todo;
            })
        );
    };

    const showActiveTodos = () => {
        setTodos(
            todos.map((todo) => {
                todo.completed ? (todo.hidden = true) : (todo.hidden = false);
                return todo;
            })
        );
    };

    const showCompletedTodos = () => {
        setTodos(
            todos.map((todo) => {
                todo.completed ? (todo.hidden = false) : (todo.hidden = true);
                return todo;
            })
        );
    };

    const removeCompletedTodos = () => {
        setTodos(
            todos.filter((todo) => {
                return !todo.completed;
            })
        );
    };

    const removeAllTodos = () => {
        setTodos([]);
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
                <section className={styles.todoFormSection}>
                    <TodoForm addTodo={addTodo} />
                </section>
                <TodoOptions
                    showAll={showAllTodos}
                    showActive={showActiveTodos}
                    showCompleted={showCompletedTodos}
                    removeCompleted={removeCompletedTodos}
                    removeAll={removeAllTodos}
                />
                <section className={styles.todoListSection}>
                    <TodoList>{todoItems}</TodoList>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
