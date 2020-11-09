import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <form className="searchBar-block" role="search">
      <label
        htmlFor="site-search"
        className="searchBar-label-hidden"
      >
        <input
          type="search"
          id="site-search"
          className="searchBar-input"
          name="q"
          aria-label="Search through site content"
          placeholder="Recherche un film"
        />
      </label>
      <button type="submit" className="searchBar-button">
        {/* eslint-disable-next-line react/self-closing-comp */}
        <span className="searchBar-button-icon"></span>
      </button>
    </form>
  );
}
