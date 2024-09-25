import { createSlice, configureStore } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        searchTerm: '',
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
});

export const { addTodo, deleteTodo, setSearchTerm } = todoSlice.actions;

const store = configureStore({
    reducer: todoSlice.reducer,
});

export default store;