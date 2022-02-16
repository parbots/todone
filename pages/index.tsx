import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
    return (
        <div className={styles.page}>
            <Head>
                <title>ToDone</title>
                <meta name='description' content='Go from do to done.' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <header className={styles.header}>
                <h1 className={styles.headerTitle}>ToDone</h1>
            </header>
            <main className={styles.main}>
                <section className={styles.addTodoSection}>
                    <input
                        type='text'
                        name=''
                        id=''
                        placeholder='Type todo text'
                        className={styles.todoInput}
                    />
                    <button className={styles.addTodoButton}>+</button>
                </section>
                <section className={styles.todoListSection}>
                    <ul className={styles.todoList}>
                        <li className={styles.todoItem}>
                            <button className={styles.todoButton}></button>
                            <p className={styles.todoText}>Test Todo</p>
                        </li>
                    </ul>
                </section>
            </main>
            <footer className={styles.footer}>
                <p className={styles.copyright}>© Parker Botsford</p>
            </footer>
        </div>
    );
};

export default HomePage;
