import React from 'react'
import './Card.css';

function Card(props) {
    return (
        <div className="card-movie">
            <img 
                src={props.img}
                className="card-movie-img"
                alt={props.title}
            />
            <h3 className="card-movie-title">{props.title}</h3>
            <p className="card-movie-year">{props.year}</p>
        </div>
    )
}

export default Card;