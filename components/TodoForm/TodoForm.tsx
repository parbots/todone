import styles from './TodoForm.module.css';

import { Formik, Form, Field } from 'formik';

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
                <button type='submit' className={styles.addTodoButton}></button>
            </Form>
        </Formik>
    );
};

export default TodoForm;
