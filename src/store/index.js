import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import todoReducer from './slices/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

