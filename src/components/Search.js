import { PropTypes } from "prop-types";
import React from 'react'
import './Search.css'

function Search({onSearch,term}) {
    return (
        <div className="search_input">
            <label>Search a product</label>
            <input 
            type="search" 
            value={term}
            onChange={(event) => onSearch(event.target.value)}></input>
            
        </div>
    )
}

Search.propTypes = {
    term: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
  };

export default Search