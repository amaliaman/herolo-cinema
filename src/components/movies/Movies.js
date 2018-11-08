import React, { Component } from 'react';

import titles from '../../data/titles.json'
import transportLayer from '../../utils/TransportLayer';
import Movie from './Movie';

// TODO: convert to Redux/////////////////////////////////////////////////////
class Movies extends Component {
    constructor() {
        super();
        this.state = { movies: [] };
    }

    componentDidMount = async () => {
        const movies = await transportLayer.getMovies(titles);
        console.log(movies)
        this.setState({ movies });
    };

    render() {
        return (
            <div>
                <h3>Hero Movies</h3>
                {this.state.movies ? this.state.movies.map(m => <Movie key={m.id} movie={m} />) : 'null'} {/* //////////TODO: empty message */}
                <button>Add Movie</button>
            </div>
        );
    }
}

export default Movies;