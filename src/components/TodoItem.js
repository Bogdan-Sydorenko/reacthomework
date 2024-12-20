import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, removeTodo } from '../store/todoActions';

const TodoItem = ({ todo }) => {
    const [text, setText] = useState(todo.title);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTodo(todo.id));
    };

    return (
        <li>
                <span>{todo.title}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};

export default TodoItem;
