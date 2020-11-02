import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import Label from '../../components/Label/Label'
import Select from '../../components/Select/Select'
import Pagination from '../../components/Pagination/Pagination';
import Cards from '../../components/Cards/Cards';

import { ALL_MOVIES_URL, END_POINT } from '../../EndPoints'

import './MoviesList.css'

function MoviesList() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [moviesPerPage] = useState(5)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            const res = await Axios.get(`${END_POINT}${ALL_MOVIES_URL}`)
            setMovies(res.data.results)
            setLoading(false)
        }

        fetchMovies();
    }, []);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = pagenumber => setCurrentPage(pagenumber)

    return (
        <section className="container">
            <h2 className="section-title">Tous les films</h2>
            <div className="sortAndFilters-fields">
                <div>
                    <Label htmlFor="alphabeticalOrder">Trier par</Label>
                    <Select id="alphabeticalOrder" defaultSelect="Ordre alphabétique" />
                </div>
                <div>
                    <Label htmlFor="gender">Filtrer par</Label>
                    <Select id="gender" defaultSelect="Genre" />
                    <Select className="ml-10" id="gender" defaultSelect="Année" />
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
    )
}

export default MoviesList;