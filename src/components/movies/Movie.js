import React, { Component } from 'react';
import { CardFooter, Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

class Movie extends Component {
    render() {
        const { title, year, runtime, genre, director } = this.props.movie;
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
                    <CardLink href="#">Edit</CardLink>
                    <CardLink href="#">Delete</CardLink>
                </CardFooter>
            </Card>
        );
    }
}

export default Movie;