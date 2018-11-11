import React, { Component } from 'react';
import { CardFooter, Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

import * as strings from '../constants/Strings';

class Movie extends Component {
    handleEditClick = () => {
        const { selectForEdit, showForm, movie: { id } } = this.props;
        selectForEdit(id);
        showForm(strings.FORM_MODES.EDIT);
    };

    render() {
        const { id, title, year, runtime, genre, director } = this.props.movie;
        return (
            <Card>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{year}</CardSubtitle>
                    <CardText>
                        Director: {director}<br />
                        Genre: {genre}<br />
                        Runtime: {runtime}
                    </CardText>
                </CardBody>
                <CardFooter>
                    <CardLink href="#" onClick={this.handleEditClick}>{strings.EDIT_BUTTON}</CardLink>
                    <CardLink href="#" onClick={() => this.props.toggleDeleteConfirm(id)}>{strings.DELETE_BUTTON}</CardLink>
                </CardFooter>
            </Card>
        );
    }
}

export default Movie;