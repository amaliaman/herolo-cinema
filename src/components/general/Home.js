import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Movies from '../movies/Movies';

class Home extends Component {
    render() {
        return (
            <div>
                <Movies />
                <Button color="danger">+ Add Movie</Button>
            </div>
        );
    }
}

export default Home;