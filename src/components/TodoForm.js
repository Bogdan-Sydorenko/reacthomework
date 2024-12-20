import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/todoSlice';
import '../styles/form.css'

const TodoForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form className='form-wrapper' onSubmit={handleSubmit}>
            <input className='form-input'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="ENTER YOUR TODO"
            />
            <button className='form-button' type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
