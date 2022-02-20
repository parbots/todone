import styles from './AddItemForm.module.css';

import { ChangeEvent, FormEvent, useState } from 'react';

const AddItemForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [isValidName, setValidName] = useState(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValidName(event.target.value !== '' && event.target.value !== ' ');
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isValidName) {
            // TODO: create item here
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