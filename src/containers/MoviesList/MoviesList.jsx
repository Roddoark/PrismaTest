import React from 'react'
import Card from '../../components/Card/Card';
import Label from '../../components/Label/Label'
import Select from '../../components/Select/Select'

import './MoviesList.css'

const IMG_URL = "https://image.tmdb.org/t/p/w440_and_h660_face/"

function MoviesList({moviesList}) {
    const renderMovies = () =>
    moviesList.map(mmovie => (
        <Card
            className="mt-30 text-align-center"
            key={mmovie.id}
            title={mmovie.title}
            year={mmovie.release_date}
            img={`${IMG_URL}${mmovie.poster_path}`}
        />
    ));
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
            {renderMovies()}
            </div>
        </section>
    )
}

export default MoviesList;