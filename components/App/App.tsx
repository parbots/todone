import styles from './App.module.css';

import { useState } from 'react';

import type { ItemType } from 'types/Item';

import AddItemForm from 'components/AddItemForm';
import List from 'components/List';
import ListOptions from 'components/ListOptions';

import { v1 as uuid } from 'uuid';

const App = () => {
    const [items, setItems] = useState<ItemType[]>([]); // List of items

    // Item filters
    const [filters, _] = useState(['All', 'Active', 'Complete']);
    // Current Item filter
    const [itemFilter, setItemFilter] = useState(filters[0]);

    // Create a new item
    const addItem = (name: string) => {
        setItems([
            ...items,
            {
                id: uuid(),
                name: name,
                complete: false,
            },
        ]);
    };

    // Remove an item
    const removeItem = (idToRemove: string) => {
        setItems(
            items.filter((item) => {
                return item.id !== idToRemove;
            })
        );
    };

    // Remove all items
    const removeAllItems = () => {
        setItems([]);
    };

    // Remove completed items
    const removeCompleteItems = () => {
        setItems(
            items.filter((item) => {
                return !item.complete;
            })
        );
    };

    // Complete an item
    const completeItem = (idToComplete: string) => {
        setItems(
            items.map((item) => {
                if (item.id === idToComplete) {
                    item.complete = true;
                }

                return item;
            })
        );
    };

    return (
        <>
            <section className={styles.sections}>
                <AddItemForm addItem={addItem} />
            </section>
            <section className={styles.section}>
                <ListOptions
                    filters={filters}
                    filter={itemFilter}
                    setFilter={setItemFilter}
                    removeAll={removeAllItems}
                    removeComplete={removeCompleteItems}
                />
            </section>
            <section className={styles.section}>
                <List
                    items={items}
                    filters={filters}
                    filter={itemFilter}
                    completeItem={completeItem}
                    removeItem={removeItem}
                />
            </section>
        </>
    );
};

export default App;
