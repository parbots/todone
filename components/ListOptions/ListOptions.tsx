import styles from './ListOptions.module.css';

import { useState, ChangeEvent } from 'react';

type OptionsProps = {
    filters: string[];
    filter: string;
    setFilter: Function;
    removeAll: Function;
    removeComplete: Function;
};

const ListOptions = ({
    filters,
    filter,
    setFilter,
    removeAll,
    removeComplete,
}: OptionsProps) => {
    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    const filterRadios = filters.map((radioFilter) => {
        const selected = filter === radioFilter;
        return (
            <label
                key={radioFilter}
                className={`${styles.radioLabel} ${
                    selected ? styles.radioLabelSelected : ''
                }`}
            >
                {radioFilter}
                <input
                    type='radio'
                    name='filter'
                    checked={selected}
                    value={radioFilter}
                    onChange={handleFilterChange}
                    className={styles.radioInput}
                />
            </label>
        );
    });

    return (
        <fieldset className={styles.listOptions}>
            <section className={styles.section}>
                <p>Filter: </p>
                {filterRadios}
            </section>
            <section className={styles.section}>
                <button
                    onClick={() => removeComplete()}
                    className={styles.actionButton}
                >
                    Clear Complete
                </button>
                <button
                    onClick={() => removeAll()}
                    className={styles.actionButton}
                >
                    Clear All
                </button>
            </section>
        </fieldset>
    );
};

export default ListOptions;
