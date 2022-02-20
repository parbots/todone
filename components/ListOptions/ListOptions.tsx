import styles from './ListOptions.module.css';

type OptionsProps = {
    removeAll: Function;
    removeComplete: Function;
};

const ListOptions = ({ removeAll, removeComplete }: OptionsProps) => {
    return (
        <fieldset className={styles.listOptions}>
            <section className={styles.section}>
                <label htmlFor='all' className={styles.radioLabel}>
                    All
                    <input
                        type='radio'
                        name='filter'
                        id='all'
                        value='all'
                        className={styles.radioInput}
                    />
                </label>
                <label htmlFor='active' className={styles.radioLabel}>
                    Active
                    <input
                        type='radio'
                        name='filter'
                        id='active'
                        value='active'
                        className={styles.radioInput}
                    />
                </label>
                <label htmlFor='complete' className={styles.radioLabel}>
                    Complete
                    <input
                        type='radio'
                        name='filter'
                        id='complete'
                        value='active'
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
