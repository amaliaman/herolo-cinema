import React, { Component } from 'react';

class Movie extends Component {
    render() {
        const { title, year, runtime, genre, director } = this.props.movie;
        return (
            <div>
                {title}, {year}, {runtime}, {genre}, {director}
            </div>
        );
    }
}

export default Movie;