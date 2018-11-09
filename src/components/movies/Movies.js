import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import { connect } from 'react-redux';

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
        console.log(this.props.movies)
        return (
            <CardColumns>
                {this.props.movies.length ?
                    this.props.movies.map(m => <Movie key={m.id} movie={m} />)
                    :
                    'null'} {/* //////////TODO: empty message */}
            </CardColumns>
        );
    }

}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};

export default connect(mapStateToProps)(Movies);