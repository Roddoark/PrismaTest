import React from 'react';

import Header from './components/Header/Header';
import AllMoviesSection from './containers/AllMoviesSection/AllMoviesSection';
import MoviesList from './containers/MoviesList/MoviesList';
import TopMoviesList from './containers/TopMoviesList';

function App() {
    return (
        <div className="App">
            <Header />
            <TopMoviesList />
            <MoviesList />
            <AllMoviesSection />
        </div>
    );
}

export default App;
