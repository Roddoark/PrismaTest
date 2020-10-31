import React from 'react'
import './Header.css';
import logo from '../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
    return (
        <header className='header'>
            <img src={logo} className='logo' alt='logo' />
            <SearchBar />
        </header>
    )
}

export default Header;
