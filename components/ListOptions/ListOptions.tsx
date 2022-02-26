import styles from './ListOptions.module.css';

import { ChangeEvent } from 'react';

type OptionsProps = {
    filters: string[];
    currentFilter: string;
    setFilter: Function;
    search: string;
    setSearch: Function;
    clearTasks: Function;
    clearCompleteTasks: Function;
};

const ListOptions = ({
    filters,
    currentFilter,
    setFilter,
    search,
    setSearch,
    clearTasks,
    clearCompleteTasks,
}: OptionsProps) => {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setSearch(event.target.value);
    };

    const filterButtons = filters.map((filter) => {
        const selected = filter === currentFilter;
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
            <section className={styles.searchSection}>
                <section className={styles.searchBar}>
                    <input
                        type='text'
                        placeholder='search'
                        maxLength={20}
                        data-empty={(search.length === 0).toString()}
                        value={search}
                        onChange={handleSearch}
                        className={styles.searchInput}
                    />
                </section>
                <section className={styles.filterSection}>
                    <p>Filter: </p>
                    <ul className={styles.filterList}>{filterButtons}</ul>
                </section>
            </section>
            <section className={styles.actionSection}>
                <button
                    onClick={() => clearCompleteTasks()}
                    className={styles.actionButton}
                >
                    Clear Complete
                </button>
                <button
                    onClick={() => clearTasks()}
                    className={`${styles.actionButton} ${styles.clearAllButton}`}
                >
                    Clear All
                </button>
            </section>
        </fieldset>
    );
};

export default ListOptions;
