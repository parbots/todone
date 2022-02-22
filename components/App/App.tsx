import styles from './App.module.css';

import { useState, useEffect } from 'react';

import type { ItemType } from 'types/Item';

import AddItemForm from 'components/AddItemForm';
import List from 'components/List';
import ListOptions from 'components/ListOptions';

import { v1 as uuid } from 'uuid';

const App = () => {
    // List of items
    const [items, setItems] = useState<ItemType[]>([]);

    // Item filters
    const [itemFilters] = useState(['All', 'Active', 'Complete']);
    // Current Item filter
    const [currentItemFilter, setCurrentItemFilter] = useState(itemFilters[0]);
    // List of filtered items
    const [filteredItems, setFilteredItems] = useState([...items]);

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

    // Filter items if items or currentItemFilter is changed
    useEffect(() => {
        setFilteredItems([
            ...items.filter((item) => {
                switch (currentItemFilter) {
                    case 'All':
                        return true;
                    case 'Active':
                        return !item.complete;
                    case 'Complete':
                        return item.complete;
                }
            }),
        ]);
    }, [items, currentItemFilter]);

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
                    filteredItems={filteredItems}
                    toggleCompleteItem={toggleCompleteItem}
                    removeItem={removeItem}
                />
            </section>
        </>
    );
};

export default App;
