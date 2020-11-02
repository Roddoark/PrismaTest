import React, { useState, useEffect } from 'react'
import Axios from 'axios';

import Slider from '../components/Slider/Slider';
import Card from "../components/Card/Card";

import { END_POINT, IMG_URL, POPULAR_MOVIES_URL } from '../EndPoints'

function TopMoviesList() {
    const [topMoviesList, setTopMoviesList] = useState([])

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await Axios.get(`${END_POINT}${POPULAR_MOVIES_URL}`)
            setTopMoviesList(res.data.results.slice(1,11))
        }

        fetchMovies();
    }, []);

    const renderSlides = () =>
    topMoviesList.map(movie => (
        <Card key={movie.id} title={movie.title} year={movie.release_date} img={`${IMG_URL}${movie.poster_path}`}/>
    ));

    return (
        <section className="container">
            <h1 className="section-title">Les 10 meilleurs films</h1>
            <div className="slider">
            <Slider>
                {renderSlides()}
            </Slider>
            </div>
        </section>
    )
}

export default TopMoviesList