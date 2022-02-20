import styles from './List.module.css';

import { ItemType } from 'types/Item';

import Item from 'components/Item';

type ListProps = {
    items: ItemType[];
};

const List = ({ items }: ListProps) => {
    return (
        <ul className={styles.list}>
            {items.map((item) => {
                return (
                    <Item
                        key={item.name}
                        name={item.name}
                        complete={item.complete}
                    />
                );
            })}
        </ul>
    );
};

export default List;
