import React from 'react';

import Header from './components/Header/Header';
import MoviesList from './containers/MoviesList/MoviesList';
import TopMoviesList from './containers/TopMoviesList';

function App() {
    return (
        <div className="App">
            <Header />
            <TopMoviesList />
            <MoviesList />
        </div>
    );
}

export default App;
