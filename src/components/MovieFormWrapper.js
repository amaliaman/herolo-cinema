import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import MovieForm from './MovieForm';

class MovieFormWrapper extends Component {
    render() {
        const { isOpen, toggle, title, submitAction, addMovie, updateMovie, movieToEdit, buttonLabel,errorMessage } = this.props;
        return (
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <MovieForm
                        submitAction={submitAction}
                        toggle={toggle}
                        addMovie={addMovie}
                        updateMovie={updateMovie}
                        movieToEdit={movieToEdit}
                        buttonLabel={buttonLabel}
                        errorMessage={errorMessage}
                    />
                </ModalBody>
            </Modal>
        );
    }
}

export default MovieFormWrapper;