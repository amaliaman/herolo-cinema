import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleDeleteConfirm, selectForEdit, showForm } from '../actions';

import Movies from '../components/Movies';
import Loader from '../components/Loader';
import DeleteConfirmContainer from './DeleteConfirmContainer';

class MoviesContainer extends Component {
    render() {
        return (
            this.props.isFetching ?
                <Loader />
                :
                <div>
                    <DeleteConfirmContainer />
                    <Movies
                        movies={this.props.movies}
                        toggleDeleteConfirm={this.props.toggleDeleteConfirm}
                        selectForEdit={this.props.selectForEdit}
                        showForm={this.props.showForm}
                    />
                </div>
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
    toggleDeleteConfirm,
    selectForEdit,
    showForm
};

export default connect(mapState, mapActions)(MoviesContainer);