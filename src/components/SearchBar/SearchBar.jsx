import React from 'react'
import './SearchBar.css';

function SearchBar() {
    return (
        <form className="searchBar-block">
            <label for="site-search" className="searchBar-label-hidden"></label>
            <input 
                type="search" 
                id="site-search"
                className='searchBar-input'
                name="q"
                aria-label="Search through site content"
                placeholder="Recherche un film" />
                <button type="submit" className='searchBar-button'>
                    <span className="searchBar-button-icon"></span>
                </button>
        </form>
    )
}


export default SearchBar;