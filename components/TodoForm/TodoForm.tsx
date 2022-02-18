import styles from './TodoForm.module.css';

import { Formik, Form, Field } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

type FormProps = {
    addTodo: Function;
};

const TodoForm = ({ addTodo }: FormProps) => {
    return (
        <Formik
            initialValues={{ todoInput: '' }}
            onSubmit={(values, actions) => {
                if (values.todoInput !== '') {
                    addTodo(values.todoInput);
                    actions.resetForm();
                }
            }}
        >
            <Form className={styles.todoForm}>
                <Field
                    id='todoInput'
                    name='todoInput'
                    placeholder='Create a new todo...'
                    className={styles.todoInput}
                />
                <button type='submit' className={styles.addTodoButton}>
                    <FontAwesomeIcon
                        icon={faCirclePlus}
                        size='3x'
                        fixedWidth
                        className={styles.addTodoIcon}
                    />
                </button>
            </Form>
        </Formik>
    );
};

export default TodoForm;
