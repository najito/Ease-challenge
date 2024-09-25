import React from 'react';
import PropTypes from 'prop-types';

const Todo = React.memo(({ todo, onDelete }) => {
    return (
        <div className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
});

Todo.displayName = 'Todo';

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Todo;