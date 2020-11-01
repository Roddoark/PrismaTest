import React from 'react'
import './Card.css';

function Card(props) {
    return (
        <div className="card-movie">
            <img 
                src="https://image.tmdb.org/t/p/w440_and_h660_face/fkqJJDb4u9rEyJu8Jm8H1P2mux4.jpg"
                className="card-movie-img"
                alt={props.title}
            />
            <h3 className="card-movie-title">Slide {props.title}</h3>
            <p className="card-movie-year">2019 {props.year}</p>
        </div>
    )
}

export default Card;