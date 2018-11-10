import React, { Component } from 'react';
import { CardFooter, Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

import * as strings from '../constants/Strings';

class Movie extends Component {
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
                    <CardLink href="#">{strings.EDIT_BUTTON}</CardLink>
                    <CardLink href="#" onClick={() => this.props.deleteMovie(id)}>{strings.DELETE_BUTTON}</CardLink>
                </CardFooter>
            </Card>
        );
    }
}

export default Movie;