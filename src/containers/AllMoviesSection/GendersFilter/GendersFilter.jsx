import React, { useState, useEffect } from 'react'

import Select from '../../../components/Select/Select'
import Axios from 'axios';
import { ALL_MOVIES_URL, END_POINT, GENRES_MOVIES_URL } from '../../../EndPoints'

export default function GendersFilter() {
  const [genres, setGenres] = useState([])
  const [genreSelected, setGenreSelected] = useState(0);
  const [movies, setMovies] = useState([])
  const [moviesList, setMoviesList] = useState([])

  const sortByGenre = (movies, element, value) => {
    const result = movies.filter((movie) => movie[element].includes(parseInt(value)));
    return result;
}

  useEffect(() => {
    const fetchMovies = async () => {
        const res = await Axios.get(`${END_POINT}${ALL_MOVIES_URL}`)
        const res2 = await Axios.get(`${END_POINT}${GENRES_MOVIES_URL}`)
        const genres = res2.data.genres
        setGenres(genres)
    }
    fetchMovies();
}, []);

  useEffect(() => {
    console.log('genre changed', genreSelected)
    const moviesSorted = sortByGenre(moviesList, "genre_ids", genreSelected);
    setMovies(moviesSorted.length > 0 ? moviesSorted : [])
}, [genreSelected]);

  return (
    <>
      <Select 
          id="gender"
          genres={genres}
          defaultOption="Genre"
          value={genreSelected}
          setValue={setGenreSelected}
          selected={true}
          disabled={true}
      />
    </>
  )
}
