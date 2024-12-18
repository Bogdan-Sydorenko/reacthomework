import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles/TodoApp.css";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const validate = (values) => {
        const errors = {};
        if (!values.todo) {
            errors.todo = "Поле обов'язкове";
        } else if (values.todo.length < 5) {
            errors.todo = "Мінімальна довжина — 5 символів";
        }
        return errors;
    };

    const handleSubmit = (values, { resetForm }) => {
        setTodos([...todos, values.todo]);
        resetForm();
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h2>TODO List</h2>
            <Formik
                initialValues={{ todo: "" }}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="input-group">
                            <Field
                                type="text"
                                name="todo"
                                placeholder="Введіть задачу"
                                className="todo-input"
                            />
                            <ErrorMessage
                                name="todo"
                                component="div"
                                className="error-message"
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="add-button">
                            Додати
                        </button>
                    </Form>
                )}
            </Formik>

            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        {todo}
                        <button
                            onClick={() => handleDelete(index)}
                            className="delete-button"
                        >
                            Видалити
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
