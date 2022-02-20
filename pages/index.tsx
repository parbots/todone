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
    const [itemID, setItemID] = useState(0); // ID counter for items
    const [items, setItems] = useState<ItemType[]>([]); // List of items

    // Create a new item
    const addItem = (name: string) => {
        setItems([
            ...items,
            {
                id: itemID,
                name: name,
                complete: false,
            },
        ]);

        setItemID(itemID + 1);
    };

    // Remove an item
    const removeItem = (idToRemove: number) => {
        setItems(
            items.filter((item) => {
                return item.id !== idToRemove;
            })
        );
    };

    return (
        <div className={styles.page}>
            <Head>
                <title>ToDone</title>
                <meta name='description' content='Go from do to done.' />
            </Head>

            <Header />
            <main className={styles.main}>
                <section className={styles.sections}>
                    <AddItemForm addItem={addItem} />
                </section>
                <section className={styles.section}>
                    <ListOptions />
                </section>
                <section className={styles.section}>
                    <List items={items} removeItem={removeItem} />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ToDone;
