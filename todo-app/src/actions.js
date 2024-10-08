import { ADD_TODO, DELETE_TODO, SET_SEARCH_TERM } from './actiontypes';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
});