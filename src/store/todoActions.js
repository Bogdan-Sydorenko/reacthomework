import {
    fetchTodosStart,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodo,
    deleteTodo,
} from './slices/todoSlice';

export const fetchTodos = () => async (dispatch) => {
    dispatch(fetchTodosStart());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        dispatch(fetchTodosSuccess(data.slice(0, 20)));
    } catch (error) {
        dispatch(fetchTodosFailure(error.message));
    }
};

export const createTodo = (todo) => async (dispatch) => {
    dispatch(addTodo(todo));
};

export const removeTodo = (id) => async (dispatch) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
    });
    dispatch(deleteTodo(id));
};
