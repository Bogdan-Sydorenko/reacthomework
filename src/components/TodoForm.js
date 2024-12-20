
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../store/todoActions';

const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            const newTodo = {
                id: Date.now(),
                title: text,
                completed: false,
            };
            dispatch(createTodo(newTodo));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;

