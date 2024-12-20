import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchTodosStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTodosSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        fetchTodosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const {
    fetchTodosStart,
    fetchTodosSuccess,
    fetchTodosFailure,
    addTodo,
    updateTodo,
    deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;

