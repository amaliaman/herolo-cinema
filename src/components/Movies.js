import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';


// import titles from '../../data/titles.json'
// import transportLayer from '../../utils/TransportLayer';
import Movie from './Movie';

// TODO: convert to Redux/////////////////////////////////////////////////////
class Movies extends Component {
    // constructor() {
    //     super();
    //     this.state = { movies: [] };
    // }

    // componentDidMount = async () => {
    //     const movies = await transportLayer.getMovies(titles);
    //     console.log(movies)
    //     this.setState({ movies });
    // };

    render() {
        return (
            <CardColumns>
                {this.props.movies.length ?
                    this.props.movies.map(m => (
                        <Movie
                            key={m.id}
                            movie={m}
                            deleteMovie={this.props.deleteMovie}
                            selectForEdit={this.props.selectForEdit}
                            showForm={this.props.showForm}
                        />))
                    :
                    'null'} {/* //////////TODO: empty message */}
            </CardColumns>
        );
    }

}

export default Movies;