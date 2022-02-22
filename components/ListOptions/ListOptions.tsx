import styles from './ListOptions.module.css';

type OptionsProps = {
    filters: string[];
    currentFilter: string;
    setFilter: Function;
    removeAll: Function;
    removeComplete: Function;
};

const ListOptions = ({
    filters,
    currentFilter,
    setFilter,
    removeAll,
    removeComplete,
}: OptionsProps) => {
    const filterRadios = filters.map((filter, i) => {
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
