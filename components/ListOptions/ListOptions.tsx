import styles from './ListOptions.module.css';

import type { ChangeEvent } from 'react';

import type { Filter } from 'types/task';
import { Filters } from 'types/task';

type Props = {
    currentFilter: Filter;
    setCurrentFilter: (newFilter: Filter) => void;
    searchValue: string;
    setSearchValue: (newSearchValue: string) => void;
    clearTasks: () => void;
    clearCompleteTasks: () => void;
};

const ListOptions = ({
    currentFilter,
    setCurrentFilter,
    searchValue,
    setSearchValue,
    clearTasks,
    clearCompleteTasks,
}: Props) => {
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setSearchValue(event.target.value);
    };

    const filterButtons = Filters.map((filter) => {
        const selected = filter === currentFilter;
        return (
            <button
                key={filter}
                data-selected={selected.toString()}
                onClick={() => setCurrentFilter(filter)}
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
                        data-empty={(searchValue.length === 0).toString()}
                        value={searchValue}
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
