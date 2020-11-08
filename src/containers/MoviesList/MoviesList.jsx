import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Label from '../../components/Label/Label';
import Select from '../../components/Select/Select';
import Pagination from '../../components/Pagination/Pagination';
import Cards from '../../components/Cards/Cards';
import { ALL_MOVIES_URL, END_POINT, GENRES_MOVIES_URL } from '../../EndPoints';
import './MoviesList.css';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
  const [genreSelected, setGenreSelected] = useState(0);
  const sortByGenre = (movies, element, value) => {
    const result = movies.filter((movie) => movie[element].includes(parseInt(value)));
    return result;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const res = await Axios.get(`${END_POINT}${ALL_MOVIES_URL}`);
      const res2 = await Axios.get(`${END_POINT}${GENRES_MOVIES_URL}`);
      const genred = res2.data.genres;
      setGenres(genred);
      setMovies(res.data.results);
      setMoviesList(res.data.results);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    console.log('genre changed', genreSelected);
    const moviesSorted = sortByGenre(moviesList, 'genre_ids', genreSelected);
    setMovies(moviesSorted.length > 0 ? moviesSorted : []);
  }, [genreSelected]);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pagenumber) => setCurrentPage(pagenumber);
  return (
    <section className="container">
      <h2 className="section-title">Tous les films</h2>
      <div className="sortAndFilters-fields">
        <div>
          <Label htmlFor="alphabeticalOrder">Trier par</Label>
          <Select id="alphabeticalOrder" defaultOption="Ordre alphabétique" />
        </div>
        <div>
          <Label htmlFor="gender">Filtrer par</Label>
          <Select
            id="gender"
            genres={genres}
            defaultOption="Genre"
            value={genreSelected}
            setValue={setGenreSelected}
            selected
            disabled
          />
          <Select
            className="ml-10"
            id="gender"
            defaultOption="Année"
          />
        </div>
      </div>
      <div className="container-movie-grid">
        <Cards movies={currentMovies} loading={loading} />
      </div>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </section>
  );
}
