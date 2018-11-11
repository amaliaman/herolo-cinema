import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';

import { COLORS, ALERT_NO_MOVIES } from '../constants/Strings';

import Movie from './Movie';
import AlertMessage from './AlertMessage';

class Movies extends Component {
    render() {
        return (
            this.props.movies.length ?
                <CardColumns>
                    {this.props.movies.map(m => (
                        <Movie
                            key={m.id}
                            movie={m}
                            toggleDeleteConfirm={this.props.toggleDeleteConfirm}
                            selectForEdit={this.props.selectForEdit}
                            showForm={this.props.showForm}
                        />
                    ))}
                </CardColumns>
                :
                <AlertMessage message={ALERT_NO_MOVIES} color={COLORS.INFO} />
        );
    }
}

export default Movies;