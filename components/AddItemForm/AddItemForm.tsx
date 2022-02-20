import styles from './AddItemForm.module.css';

import { ChangeEvent, FormEvent, useState } from 'react';

type FormProps = {
    addItem: Function;
};

const AddItemForm = ({ addItem }: FormProps) => {
    const [inputValue, setInputValue] = useState('');
    const [valid, setValid] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!valid && event.target.value !== '' && event.target.value !== ' ') {
            setValid(true);
        }

        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (valid) {
            addItem(inputValue);
            setValid(false);
        }

        setInputValue('');
    };

    return (
        <form onSubmit={handleFormSubmit} className={styles.form}>
            <input
                type='text'
                name='itemInput'
                placeholder='Add new todo...'
                value={inputValue}
                onChange={handleInputChange}
                className={styles.itemInput}
            />
            <button type='submit' className={styles.addItemButton}>
                Add
            </button>
        </form>
    );
};

export default AddItemForm;
