import React, { Component } from 'react';
import { Button, Container, Row } from 'reactstrap';

import Movies from '../movies/Movies';

class Home extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h1 className="display-4">🎬 Herolo Cinema</h1>
                    <Movies />
                </Row>
                <Row>
                    <Button color="danger">+ Add Movie</Button>
                </Row>

            </Container>
        );
    }
}

export default Home;