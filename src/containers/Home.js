import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Row } from 'reactstrap';

import { showForm } from '../actions';
import * as strings from '../constants/Strings';

import MoviesContainer from './MoviesContainer';
import MovieFormContainer from './MovieFormContainer';

class Home extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <h1 className="display-4"><span role="img" aria-label="cinema">🎬</span> {strings.APP_TITLE}</h1>
                </Row>
                <Row>
                    <Button color={strings.COLORS.INFO} onClick={() => this.props.showForm(strings.FORM_MODES.ADD)}>{strings.ADD_BUTTON}</Button>
                </Row>
                <Row>
                    <MoviesContainer />
                    <MovieFormContainer />
                </Row>
                <Row className='footer'>
                    <div className='text-center'>
                        <p><a href='https://github.com/amaliaman/herolo-cinema' target="_blank" rel="noopener noreferrer">GitHub</a></p>
                        <small className="text-muted">
                            Background image <a href='https://www.freepik.com/free-photo/creative-arrangement-of-popcorn-and-clapper_2303387.htm' target="_blank" rel="noopener noreferrer">Designed by Freepik</a>
                        </small>
                    </div>
                </Row>
            </Container>
        );
    }
}

const mapActions = {
    showForm
};

export default connect(null, mapActions)(Home);