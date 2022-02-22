import styles from './ListOptions.module.css';

import { ChangeEvent } from 'react';

type OptionsProps = {
    filters: string[];
    currentFilter: string;
    setFilter: Function;
    search: string;
    setSearch: Function;
    removeAll: Function;
    removeComplete: Function;
};

const ListOptions = ({
    filters,
    currentFilter,
    setFilter,
    search,
    setSearch,
    removeAll,
    removeComplete,
}: OptionsProps) => {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setSearch(event.target.value);
    };

    const filterButtons = filters.map((filter) => {
        const selected = currentFilter === filter;
        return (
            <button
                key={filter}
                data-selected={selected.toString()}
                onClick={() => setFilter(filter)}
                className={styles.filterButton}
            >
                {filter}
            </button>
        );
    });

    return (
        <fieldset className={styles.listOptions}>
            <section className={styles.section}>
                <input
                    type='text'
                    placeholder='Search...'
                    value={search}
                    onChange={handleSearch}
                />
                <p>Filter: </p>
                {filterButtons}
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
                    className={
                        styles.actionButton + ' ' + styles.clearAllButton
                    }
                >
                    Clear All
                </button>
            </section>
        </fieldset>
    );
};

export default ListOptions;
