import React from 'react'

function SearchBar() {
    return (
        <>
            <input 
                type="search" 
                id="site-search" 
                name="q"
                aria-label="Search through site content" />
        </>
    )
}


export default SearchBar;