import styles from './List.module.css';

import { ItemType } from 'types/Item';

import Item from 'components/Item';

type ListProps = {
    filteredItems: ItemType[];
    toggleCompleteItem: Function;
    removeItem: Function;
};

const List = ({ filteredItems, toggleCompleteItem, removeItem }: ListProps) => {
    return (
        <ul className={styles.list}>
            {filteredItems.map((item) => {
                return (
                    <Item
                        key={item.id}
                        name={item.name}
                        complete={item.complete}
                        toggleCompleteSelf={() => toggleCompleteItem(item.id)}
                        removeSelf={() => removeItem(item.id)}
                    />
                );
            })}
        </ul>
    );
};

export default List;
