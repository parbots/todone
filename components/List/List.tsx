import styles from './List.module.css';

import { ItemType } from 'types/Item';

import Item from 'components/Item';

type ListProps = {
    items: ItemType[];
    filters: string[];
    filter: string;
    completeItem: Function;
    removeItem: Function;
};

const List = ({
    items,
    filters,
    filter,
    completeItem,
    removeItem,
}: ListProps) => {
    const filteredItems = items.filter((item) => {
        switch (filter) {
            case filters[0]:
                return true;
            case filters[1]:
                return !item.complete;
            case filters[2]:
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
