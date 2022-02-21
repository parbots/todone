import styles from './AddItemForm.module.css';

import { useState, ChangeEvent, FormEvent } from 'react';

type FormProps = {
    addItem: Function;
};

const AddItemForm = ({ addItem }: FormProps) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // TODO: add user feedback for invalid input
        if (
            inputValue.length > 0 &&
            inputValue !== '' &&
            inputValue[0] !== ' '
        ) {
            addItem(inputValue);
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
                minLength={1}
                maxLength={60}
                className={styles.itemInput}
            />
            <button type='submit' className={styles.addItemButton}>
                Add
            </button>
        </form>
    );
};

export default AddItemForm;
