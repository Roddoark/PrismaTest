import React from 'react';

import Header from './components/Header/Header';
import Label from './components/Label/Label';
import GendersFilter from './containers/AllMoviesSection/GendersFilter/GendersFilter';
import TopMoviesList from './containers/TopMoviesList';
/* import MoviesList from './containers/MoviesList/MoviesList';
import TopMoviesList from './containers/TopMoviesList';
*/

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Header />
      <TopMoviesList />
      <GendersFilter>
        ded
      </GendersFilter>
      <Label Cfor="frf">
        aloha
      </Label>
    </div>
  );
}

export default App;
