import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as strings from '../constants/Strings';
import { toggleForm, addMovie } from '../actions';

import MovieFormWrapper from '../components/MovieFormWrapper';

class MovieFormContainer extends Component {
    render() {
        return (
            <MovieFormWrapper
                isOpen={this.props.isOpen}
                title={this.props.title}
                toggle={this.props.toggleForm}
                addMovie={this.props.addMovie}
                editedMovie={this.props.editedMovie}
            />
        );
    }
}

const mapState = state => {
    const { form, editedMovie } = state;
    return {
        isOpen: form.isOpen,
        title: form.mode === strings.FORM_MODES.EDIT ? strings.EDIT_MOVIE_TITLE : strings.ADD_MOVIE_TITLE,
        editedMovie
    };
};

const mapActions = {
    toggleForm,
    addMovie
};

export default connect(mapState, mapActions)(MovieFormContainer);