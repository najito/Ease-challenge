import React, { lazy ,useCallback, useMemo, Suspense } from 'react';
import PropTypes from 'prop-types';

const Todo = lazy(() => import('./Todo'))

const TodoList = ({ todos, onDelete }) => {
    const handleDelete = useCallback((id) => {
        onDelete(id)
    }, [onDelete])

    const renderedTodos = useMemo(() => {
        return todos.map(todo => (
            <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
        ));
    }, [todos, onDelete]); 

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ul className="todo-list">
                {renderedTodos}
            </ul>
        </Suspense>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TodoList;