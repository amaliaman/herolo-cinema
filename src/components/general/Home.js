import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row } from 'reactstrap';

import { addMovie } from '../../actions';

import Movies from '../movies/Movies';

class Home extends Component {

    handleClick = e => {
        e.preventDefault();
        const movie = {
            director: "aaPhil Tippett",
            genre: "aaAction, Adventure, Horror, Sci-Fi",
            id: "aaa18da55f-efb5-4211-baae-f2b38e9e5def",
            runtime: "aa88 min",
            title: "aaStarship Troopers 2 Hero Of The Federation",
            year: "aa2004"
        }
        this.props.addMovie(movie);
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1 className="display-4"><span role="img" aria-label="cinema">🎬</span> Herolo Cinema</h1>
                </Row>
                <Row>
                    <Movies />
                </Row>
                <Row>
                    <Button color="danger" onClick={this.handleClick}>+ Add Movie</Button>
                </Row>
            </Container>
        );
    }
}

const actionCreators = {
    addMovie
};

export default connect(null, actionCreators)(Home);