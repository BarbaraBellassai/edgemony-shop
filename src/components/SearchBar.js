import React from 'react'
import './ErrorComponent.css'
function SearchBar({searchInput}) {
    return (
        <div className="search_input">
            <label>Search a product</label>
            <input type="text" onChange={searchInput}></input>
            
        </div>
    )
}

export default SearchBar