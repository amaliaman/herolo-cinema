import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import MovieForm from './MovieForm';

class MovieFormWrapper extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>
                    <MovieForm addMovie={this.props.addMovie} toggle={this.props.toggle} />
                </ModalBody>
            </Modal>
        );
    }
}

export default MovieFormWrapper;