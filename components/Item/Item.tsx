import styles from './Item.module.css';

import { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon
                    icon={faXmarkSquare}
                    fixedWidth
                    className={styles.removeItemIcon}
                />
            </button>
        </li>
    );
};

export default Item;
