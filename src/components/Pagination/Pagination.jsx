import React from 'react'

export default function Pagination({ moviesPerPage, totalMovies, paginate }) {
    const pageNumbers = []

    for(let i = 1; i<= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination-item">
                        <a onClick={() => paginate(number)} href="!#" className="pagination-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
