import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ input, setInput, addTodo }) => {
    return (
        <div className="input-container">
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Add a todo" 
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
};

TodoForm.propTypes = {
    input: PropTypes.string.isRequired,
    setInput: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
}

export default TodoForm;