import Axios from 'axios';
import React, { Component } from 'react';

import Header from './components/Header/Header';
import MoviesList from './containers/MoviesList';
import TopMoviesList from './containers/TopMoviesList';

const API_KEY = "ee52528a3d2bfff0312880daeaee21b3";

const END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = `discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=${API_KEY}`

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {topMoviesList: {}}
    }

    componentDidMount() {
        Axios.get(`${END_POINT}${POPULAR_MOVIES_URL}`).then(function(response) {
            this.setState({
                topMoviesList: response.data.results.slice(1,11)
            })
            console.log(this.state.topMoviesList)
        }.bind(this));
    }

    render() {
        const renderTopMoviesList = () => {
            if(this.state.topMoviesList.length >= 4) {
                return <TopMoviesList topMoviesList={this.state.topMoviesList} />
            }
        }

        return (
          <div className="App">
            <Header />
            {renderTopMoviesList()}
            <MoviesList />
          </div>
        );
    }
}

export default App;
