import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as strings from '../constants/Strings';
import { toggleForm, addMovie, updateMovie } from '../actions';

import MovieFormWrapper from '../components/MovieFormWrapper';

class MovieFormContainer extends Component {
    render() {
        return (
            <MovieFormWrapper
                isOpen={this.props.isOpen}
                title={this.props.title}
                toggle={this.props.toggleForm}
                updateMovie={this.props.updateMovie}
                addMovie={this.props.addMovie}
                movieToEdit={this.props.movieToEdit}
                buttonLabel={this.props.buttonLabel}
            />
        );
    }
}

const mapState = state => {
    const { form, movies: { items, selectedId } } = state;
    return {
        isOpen: form.isOpen,
        title: form.mode === strings.FORM_MODES.EDIT ? strings.EDIT_MOVIE_TITLE : strings.ADD_MOVIE_TITLE,
        movieToEdit: selectedId ? items.find(i => i.id === selectedId) : null,
        buttonLabel: form.mode === strings.FORM_MODES.EDIT ? strings.SUBMIT_UPDATE_BUTTON : strings.SUBMIT_ADD_BUTTON
    };
};

const mapActions = {
    toggleForm,
    updateMovie,
    addMovie
};

export default connect(mapState, mapActions)(MovieFormContainer);