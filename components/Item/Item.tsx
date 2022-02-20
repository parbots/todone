import styles from './Item.module.css';

import { useState, ChangeEvent } from 'react';

type ItemProps = {
    name: string;
    complete: boolean;
    completeSelf: Function;
    removeSelf: Function;
};

const Item = ({ name, complete, completeSelf, removeSelf }: ItemProps) => {
    const handleCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
        if (!complete) {
            completeSelf();
        }

        event.preventDefault();
    };

    return (
        <li className={styles.item}>
            <input
                type='checkbox'
                name='complete'
                checked={complete}
                onChange={handleCheckbox}
                className={styles.checkBox}
            />
            <p className={styles.itemName}>{name}</p>
            <button
                onClick={() => removeSelf()}
                className={styles.removeItemButton}
            >
                Remove
            </button>
        </li>
    );
};

export default Item;
