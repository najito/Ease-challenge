import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, {addTodo, deleteTodo, setSearchTerm} from './store';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
    const [input, setInput] = useState('');
    const searchTerm = useSelector(state => state.searchTerm);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            savedTodos.forEach(todo => dispatch(addTodo(todo))); 
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filteredTodos = todos.filter(todo => 
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddTodo = () => {
        if (input) {
            const newTodo = { id: Date.now(), text: input };
            dispatch(addTodo(newTodo));
            setInput('');
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleSearchChange = (input) => {
        dispatch(setSearchTerm(input))
    };


    return (
        <div className="container">
            <h1>Todo App</h1>
            <TodoForm input={input} setInput={setInput} addTodo={handleAddTodo} />
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <TodoList todos={filteredTodos} onDelete={handleDeleteTodo} />
        </div>
    );
};

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;