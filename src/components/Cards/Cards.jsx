import React from 'react';
import Card from '../Card/Card';

import { IMG_URL } from '../../EndPoints'

const Cards = ({ movies, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {movies.map(movie => (
        <Card
            className="mt-30 text-align-center"
            key={movie.id}
            title={movie.title}
            year={movie.release_date}
            img={`${IMG_URL}${movie.poster_path}`}
        />
    ))}
    </>
  );
};

export default Cards;