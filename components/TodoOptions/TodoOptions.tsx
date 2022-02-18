import styles from './TodoOptions.module.css';
import React from 'react';

type OptionProps = {
    showAll: Function;
    showActive: Function;
    showCompleted: Function;
    removeCompleted: Function;
    removeAll: Function;
};

const TodoOptions = ({
    showAll,
    showActive,
    showCompleted,
    removeCompleted,
    removeAll,
}: OptionProps) => {
    return (
        <section className={styles.todoOptionsSection}>
            <div className={styles.listFilters}>
                <p className={styles.filterText}>Show:</p>
                <button
                    onClick={() => showAll()}
                    className={styles.filterButton}
                >
                    All
                </button>
                <button
                    onClick={() => showActive()}
                    className={styles.filterButton}
                >
                    Active
                </button>
                <button
                    onClick={() => showCompleted()}
                    className={styles.filterButton}
                >
                    Complete
                </button>
            </div>
            <div className={styles.clearButtons}>
                <button
                    onClick={() => removeCompleted()}
                    className={styles.clearButton}
                >
                    Clear Complete
                </button>
                <button
                    onClick={() => removeAll()}
                    className={styles.clearButton}
                >
                    Clear All
                </button>
            </div>
        </section>
    );
};

export default TodoOptions;
