import styles from './List.module.css';

import { ItemType } from 'types/Item';

import Item from 'components/Item';

type ListProps = {
    items: ItemType[];
    filter: string;
    completeItem: Function;
    removeItem: Function;
};

const List = ({ items, filter, completeItem, removeItem }: ListProps) => {
    const filteredItems = items.filter((item) => {
        switch (filter) {
            case 'all':
                return true;
            case 'active':
                return !item.complete;
            case 'complete':
                return item.complete;
        }
    });

    return (
        <ul className={styles.list}>
            {filteredItems.map((item) => {
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
