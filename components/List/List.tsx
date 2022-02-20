import styles from './List.module.css';

import { ItemType } from 'types/Item';

import Item from 'components/Item';

type ListProps = {
    items: ItemType[];
    completeItem: Function;
    removeItem: Function;
};

const List = ({ items, completeItem, removeItem }: ListProps) => {
    return (
        <ul className={styles.list}>
            {items.map((item) => {
                return (
                    <Item
                        key={item.id}
                        name={item.name}
                        complete={item.complete}
                        completeSelf={() => completeItem(item.id)}
                        removeSelf={() => removeItem(item.id)}
                    />
                );
            })}
        </ul>
    );
};

export default List;
