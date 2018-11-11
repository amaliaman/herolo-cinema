import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteMovie, selectForEdit, showForm } from '../actions';

import Movies from '../components/Movies';
import Loader from '../components/Loader';

class MoviesContainer extends Component {
    render() {
        return (
            this.props.isFetching ? <Loader /> :
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
    const { movies: { items, isFetching } } = state;
    return {
        movies: items,
        isFetching
    };
};

const mapActions = {
    deleteMovie,
    selectForEdit,
    showForm
};

export default connect(mapState, mapActions)(MoviesContainer);