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
    const [itemFilters] = useState(['All', 'Active', 'Complete']);
    // Current Item filter
    const [currentItemFilter, setCurrentItemFilter] = useState(itemFilters[0]);

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

        if (currentItemFilter === 'Complete') {
            setCurrentItemFilter('All');
        }
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
    const toggleCompleteItem = (idToToggleComplete: string) => {
        setItems(
            items.map((item) => {
                if (item.id === idToToggleComplete) {
                    item.complete = !item.complete;
                }

                return item;
            })
        );
    };

    const filterItems = () => {
        return items.filter((item) => {
            switch (currentItemFilter) {
                case 'All':
                    return true;
                case 'Active':
                    return !item.complete;
                case 'Complete':
                    return item.complete;
            }
        });
    };

    return (
        <>
            <section className={styles.sections}>
                <AddItemForm addItem={addItem} />
            </section>
            <section className={styles.section}>
                <ListOptions
                    filters={itemFilters}
                    currentFilter={currentItemFilter}
                    setFilter={setCurrentItemFilter}
                    removeAll={removeAllItems}
                    removeComplete={removeCompleteItems}
                />
            </section>
            <section className={styles.section}>
                <List
                    filteredItems={filterItems()}
                    toggleCompleteItem={toggleCompleteItem}
                    removeItem={removeItem}
                />
            </section>
        </>
    );
};

export default App;
