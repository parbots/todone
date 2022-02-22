import styles from './Item.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquare,
    faCheckSquare,
    faXmarkSquare,
} from '@fortawesome/free-solid-svg-icons';

type ItemProps = {
    name: string;
    complete: boolean;
    toggleCompleteSelf: Function;
    removeSelf: Function;
};

const Item = ({
    name,
    complete,
    toggleCompleteSelf,
    removeSelf,
}: ItemProps) => {
    return (
        <li data-complete={complete.toString()} className={styles.item}>
            <button
                onClick={() => toggleCompleteSelf()}
                className={styles.completeItemButton}
                aria-label='Complete Todo Toggle Button'
            >
                <FontAwesomeIcon
                    icon={complete ? faCheckSquare : faSquare}
                    fixedWidth
                    className={styles.completeItemIcon}
                />
            </button>
            <div className={styles.itemContentContainer}>
                <p className={styles.itemName}>{name}</p>
            </div>
            <button
                onClick={() => removeSelf()}
                className={styles.removeItemButton}
                aria-label='Remove Todo Button'
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
