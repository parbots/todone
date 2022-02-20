import styles from './Item.module.css';

type ItemProps = {
    name: string;
    complete: boolean;
};

const Item = ({ name, complete }: ItemProps) => {
    return (
        <li className={styles.item}>
            <input
                type='checkbox'
                name='complete'
                checked={complete ? true : undefined}
                className={styles.checkBox}
            />
            <p className={styles.itemName}>{name}</p>
            <button className={styles.removeItemButton}>Remove</button>
        </li>
    );
};

export default Item;
