import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/list.css'

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div className='item-wrapper'>
            {todos.map((todo, index) => (
                <div className='item' key={index}>
                    <div className='item-text'>{todo}</div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
