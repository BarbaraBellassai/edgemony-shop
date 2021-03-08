import React from 'react'
import './ErrorComponent.css'
function SearchBar({searchInput,inputChange}) {
    return (
        <div className="search_input">
            <label>Search a product</label>
            <input 
            type="text" 
            value={inputChange}
            onChange={searchInput}></input>
            
        </div>
    )
}

export default SearchBar