import styles from './Item.module.css';

import { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquare,
    faCheckSquare,
    faXmarkSquare,
} from '@fortawesome/free-solid-svg-icons';

type ItemProps = {
    name: string;
    complete: boolean;
    completeSelf: Function;
    removeSelf: Function;
};

const Item = ({ name, complete, completeSelf, removeSelf }: ItemProps) => {
    return (
        <li className={styles.item}>
            <button
                onClick={() => completeSelf()}
                className={styles.completeItemButton}
            >
                <FontAwesomeIcon
                    icon={complete ? faCheckSquare : faSquare}
                    fixedWidth
                    className={styles.completeItemIcon}
                />
            </button>

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
