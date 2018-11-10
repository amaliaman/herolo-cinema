import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteMovie } from '../actions';

import Movies from '../components/Movies';

class MoviesContainer extends Component {
    render() {
        console.log(this.props.movies)
        return (
            <Movies movies={this.props.movies} deleteMovie={this.props.deleteMovie} />
        );
    }
}

const mapState = state => {
    const { movies } = state;
    return { movies };
};

const mapActions = {
    deleteMovie
};

export default connect(mapState, mapActions)(MoviesContainer);