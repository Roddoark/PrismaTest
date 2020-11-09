import React, { useState } from 'react';
import './Pagination.css';

export default function Pagination(moviesPerPage, totalMovies, paginate) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i += 1) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const paginationClick = (number) => {
    paginate(number);
    setCurrentPage(number);
  };

  return (
    <nav>
      <ul className="pagination">
        <li className="pagination-item">
          <a href="!#" className="pagination-link ">
            {/* eslint-disable-next-line react/self-closing-comp */}
            <span className="pagination-button-iconPrevious"></span>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item">
            <a
              onClick={() => paginationClick(number)}
              href="!#"
              className={`pagination-link ${number === currentPage ? 'active' : ' '}`}
            >
              {number}
            </a>
          </li>
        ))}
        <li className="pagination-item">
          <a href="!#" className="pagination-link">
            {/* eslint-disable-next-line react/self-closing-comp */}
            <span className="pagination-button-iconNext"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
