import React from 'react';
import './Card.css';

function Card(className, img, title, year) {
  return (
    <div className={`card-movie ${className}`}>
      <img
        src={img}
        className="card-movie-img"
        alt={title}
      />
      <h3 className="card-movie-title">{title}</h3>
      <p className="card-movie-year">{year.slice(0, 4)}</p>
    </div>
  );
}

export default Card;
