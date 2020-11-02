import React from 'react'
import './Pagination.css'

export default function Pagination({ moviesPerPage, totalMovies, paginate }) {
    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                <li className="pagination-item">
                    <a href="!#" className="pagination-link ">
                    <span className="pagination-button-iconPrevious"></span>

                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="pagination-item">
                        <a onClick={() => paginate(number)} href="!#" className="pagination-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li className="pagination-item">
                    <a href="!#" className="pagination-link">
                        <span className="pagination-button-iconNext"></span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
