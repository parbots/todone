import styles from 'styles/HomePage.module.css';

import type { NextPage } from 'next';
import Head from 'next/head';

import { useState } from 'react';

import type { ItemType } from 'types/Item';

import Header from 'components/Header';
import AddItemForm from 'components/AddItemForm';
import ListOptions from 'components/ListOptions';
import List from 'components/List';
import Footer from 'components/Footer';

const ToDone: NextPage = () => {
    const [items, setItems] = useState<ItemType[]>([
        { id: 0, name: 'todo 1', complete: false },
        { id: 1, name: 'todo 2', complete: true },
        { id: 2, name: 'todo 3', complete: false },
    ]);

    return (
        <div className={styles.page}>
            <Head>
                <title>ToDone</title>
                <meta name='description' content='Go from do to done.' />
            </Head>

            <Header />
            <main className={styles.main}>
                <section className={styles.sections}>
                    <AddItemForm />
                </section>
                <section className={styles.section}>
                    <ListOptions />
                </section>
                <section className={styles.section}>
                    <List items={items} />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ToDone;
