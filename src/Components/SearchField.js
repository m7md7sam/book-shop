import React from 'react';

const SearchField = ({ onSearchChange }) => {
    return (
        <div className="ui icon input segment">
            <input type="text" placeholder="Search for a book" onChange={(e) => {onSearchChange(e.target.value)}} />
        </div>
    );
};

export default SearchField;