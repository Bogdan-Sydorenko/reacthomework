import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/footer.css';

const Footer = () => {
    const todosCount = useSelector((state) => state.todos.length);

    return <footer  className='footer'>Total Todos: {todosCount}</footer>;
};

export default Footer;
