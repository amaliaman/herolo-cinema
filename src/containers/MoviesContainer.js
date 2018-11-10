import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteMovie, selectForEdit, showForm } from '../actions';

import Movies from '../components/Movies';

class MoviesContainer extends Component {
    render() {
        console.log(this.props.movies)
        return (
            <Movies
                movies={this.props.movies}
                deleteMovie={this.props.deleteMovie}
                selectForEdit={this.props.selectForEdit}
                showForm={this.props.showForm}
            />
        );
    }
}

const mapState = state => {
    const { movies: { items } } = state;
    return { movies: items };
};

const mapActions = {
    deleteMovie,
    selectForEdit,
    showForm
};

export default connect(mapState, mapActions)(MoviesContainer);