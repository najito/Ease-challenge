import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <input 
            type="text" 
            placeholder="Search todos..." 
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)} 
        />
    );
};

SearchBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired
}

export default SearchBar;