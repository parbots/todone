import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import { useState } from 'react';

import { Todo } from 'types/Todo';

import Header from 'components/Header';
import TodoForm from 'components/TodoForm';
import TodoOptions from 'components/TodoOptions';
import TodoList from 'components/TodoList';
import TodoItem from 'components/TodoItem';
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
        setTodos(todos.filter((todo) => todoToRemove !== todo));
    };

    const completeTodo = (todo: Todo) => {
        todo.completed = true;
        setTodos([...todos]);
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
            <TodoItem
                todo={todo}
                complete={completeTodo}
                remove={removeTodo}
                key={todo.id}
            />
        );
    });

    return (
        <div className={styles.page}>
            <Head>
                <title>ToDone</title>
                <meta name='description' content='Go from do to done.' />
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
