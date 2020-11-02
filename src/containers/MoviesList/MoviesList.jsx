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
    const [moviesPerPage] = useState(10)


    const sortByGenre = (movies, element, value) => {
        const result = movies.filter(movie => movie[element].includes(value));
        return result;
    }

    // UseEffect à utiliser pour les options du select
/*    useEffect(() => {

    }) */

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            const res = await Axios.get(`${END_POINT}${ALL_MOVIES_URL}`)
            
            // const result = movies.filter(movies => word.original_language === 'en');

           // setMovies(res.data.results)
            const sortedMovies = sortByGenre(res.data.results, "genre_ids", 18)
            setMovies(res.data.results.filter(movie => movie.original_language === 'en'))
            console.log(res.data.results)
            console.log('dededed', sortedMovies);
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