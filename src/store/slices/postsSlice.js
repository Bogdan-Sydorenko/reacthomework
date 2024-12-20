import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    loading: false,
    error: '',
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        fetchPostsStarted: (state) => {
            state.loading = true;
            state.error = '';
        },
        fetchPostsSucceeded: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
            state.error = '';
        },
        fetchPostsError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const { fetchPostsStarted, fetchPostsSucceeded, fetchPostsError,  } = postsSlice.actions;
export default postsSlice.reducer;