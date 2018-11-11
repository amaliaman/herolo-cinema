import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as strings from '../constants/Strings';
import { toggleForm, addMovieUnique, updateMovieUnique } from '../actions';

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
                errorMessage={this.props.errorMessage}
            />
        );
    }
}

const mapState = state => {
    const { form, movies: { items, selectedId }, errorMessage } = state;
    const propsObj = { isOpen: form.isOpen, errorMessage };
    if (form.mode === strings.FORM_MODES.EDIT) {
        propsObj.title = strings.EDIT_MOVIE_TITLE;
        propsObj.buttonLabel = strings.SUBMIT_UPDATE_BUTTON;
        propsObj.movieToEdit = items.find(i => i.id === selectedId);
    }
    else {
        propsObj.title = strings.ADD_MOVIE_TITLE;
        propsObj.buttonLabel = strings.SUBMIT_ADD_BUTTON;
    }
    return propsObj;
};

const mapActions = {
    toggleForm,
    updateMovie: updateMovieUnique,
    addMovie: addMovieUnique
};

export default connect(mapState, mapActions)(MovieFormContainer);