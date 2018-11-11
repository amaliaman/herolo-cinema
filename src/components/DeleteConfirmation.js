import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

import * as strings from '../constants/Strings';

class DeleteConfirmation extends Component {
    handleDelete = () => {
        this.props.deleteMovie(this.props.selectedId);
        this.props.toggle();
    };

    render() {
        const { isOpen, toggle, selectedTitle } = this.props;
        return (
            <Modal isOpen={isOpen} toggle={() => toggle()}>
                <ModalHeader toggle={() => toggle()}>{selectedTitle}</ModalHeader>
                <ModalBody>
                    {strings.DELETE_CONFIRMATION_BODY}
                    <Row form>
                        <Button color={strings.COLORS.INFO} type="button" onClick={this.handleDelete}>{strings.DELETE_BUTTON}</Button>
                        <Button outline color={strings.COLORS.SECONDARY} type="button" onClick={() => toggle()}>{strings.CANCEL_BUTTON}</Button>
                    </Row>
                </ModalBody>
            </Modal>
        );
    }
}

export default DeleteConfirmation;