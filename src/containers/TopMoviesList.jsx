import React from 'react'
import Slider from '../components/Slider/Slider';
import Card from "../components/Card/Card";

const IMG_URL = "https://image.tmdb.org/t/p/w440_and_h660_face/"

function TopMoviesList({topMoviesList}) {
    const renderSlides = () =>
    topMoviesList.map(movie => (
        <Card key={movie.id} title={movie.title} year={movie.release_date} img={`${IMG_URL}${movie.poster_path}`}/>
    ));

    return (
        <section className="container">
        <h1 className="top10-title">Les 10 meilleurs films</h1>
        <div className="slider">
        <Slider>
            {renderSlides()}
        </Slider>
        </div>
    </section>
    )
}

export default TopMoviesList