import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleDeleteConfirm, deleteMovie } from '../actions';
import DeleteConfirmation from '../components/DeleteConfirmation';

class DeleteConfirmContainer extends Component {
    render() {
        return (
            <DeleteConfirmation
                isOpen={this.props.isOpen}
                toggle={this.props.toggleDeleteConfirm}
                selectedId={this.props.selectedId}
                deleteMovie={this.props.deleteMovie}
                selectedTitle={this.props.selectedTitle}
            />
        );
    }
}

const mapState = state => {
    const { deleteConfirmation, movies: { selectedId, selectedTitle } } = state;
    return {
        isOpen: deleteConfirmation.isOpen,
        selectedId,
        selectedTitle
    };
};

const mapActions = {
    toggleDeleteConfirm,
    deleteMovie
};

export default connect(mapState, mapActions)(DeleteConfirmContainer);