import styles from './AddItemForm.module.css';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

type Props = {
    addNewTask: (newTaskName: string) => void;
};

const AddItemForm = ({ addNewTask }: Props) => {
    const [inputValue, setInputValue] = useState('');

    const isEmpty = () => {
        return inputValue === '';
    };

    const isValid = () => {
        return inputValue[0] !== ' ';
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isValid() && !isEmpty()) {
            addNewTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            data-empty={isEmpty().toString()}
            data-valid={isValid().toString()}
            className={styles.form}
        >
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
            <button
                type='submit'
                className={styles.addItemButton}
                aria-label='Add Todo Button'
            >
                <FontAwesomeIcon
                    icon={faPlusSquare}
                    fixedWidth
                    className={styles.addItemIcon}
                />
            </button>
        </form>
    );
};

export default AddItemForm;
