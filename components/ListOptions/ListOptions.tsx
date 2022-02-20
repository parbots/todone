import styles from './ListOptions.module.css';

import { useState, ChangeEvent } from 'react';

type OptionsProps = {
    filter: string;
    setFilter: Function;
    removeAll: Function;
    removeComplete: Function;
};

const ListOptions = ({
    filter,
    setFilter,
    removeAll,
    removeComplete,
}: OptionsProps) => {
    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    return (
        <fieldset className={styles.listOptions}>
            <section className={styles.section}>
                <label className={styles.radioLabel}>
                    All
                    <input
                        type='radio'
                        name='filter'
                        checked={filter === 'all'}
                        value='all'
                        onChange={handleFilterChange}
                        className={styles.radioInput}
                    />
                </label>
                <label className={styles.radioLabel}>
                    Active
                    <input
                        type='radio'
                        name='filter'
                        checked={filter === 'active'}
                        value='active'
                        onChange={handleFilterChange}
                        className={styles.radioInput}
                    />
                </label>
                <label className={styles.radioLabel}>
                    Complete
                    <input
                        type='radio'
                        name='filter'
                        checked={filter === 'complete'}
                        value='complete'
                        onChange={handleFilterChange}
                        className={styles.radioInput}
                    />
                </label>
            </section>
            <section className={styles.section}>
                <button onClick={() => removeComplete()}>Clear Complete</button>
                <button onClick={() => removeAll()}>Clear All</button>
            </section>
        </fieldset>
    );
};

export default ListOptions;
