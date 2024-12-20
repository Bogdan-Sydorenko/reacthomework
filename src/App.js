import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './styles/style.css'

const App = () => (
    <div className="App">
        <h1>TODO APP WITH REDUX</h1>
        <TodoForm />
        <TodoList />
        <Footer />
    </div>
);

export default App;

