import * as types from '../constants/ActionTypes';
import titles from '../data/titles.json'
import transportLayer from '../utils/TransportLayer';
import * as strings from '../constants/Strings';

/**
 * ADD_MOVIE action creator.
 * Create a new movie in the state.
 * @param {Object} movie - The movie to add.
 */
const addMovie = movie => ({
    type: types.ADD_MOVIE,
    movie
});

export const addMovieUnique = movie => (dispatch, getState) => {
    const { movies } = getState();
    dispatch(resetError());
    if (movies.items
        .findIndex(m => m.title === movie.title) === -1) {
        dispatch(addMovie(movie));
        dispatch(toggleForm());
    }
    else {
        dispatch(showError(`${strings.UNIQUE_TITLE_ERROR}: ${movie.title}`));
    }
};

/**
 * DELETE_MOVIE action creator.
 * Delete a movie from the state.
 * @param {string} id - The id of the movie to delete.
 */
export const deleteMovie = id => ({
    type: types.DELETE_MOVIE,
    id
});

/**
 * UPDATE_MOVIE action creator.
 * Update a movie in the state.
 * @param {Object} movie - The movie movie to update.
 * @param {string} id - The id of the movie to update.
 */
const updateMovie = (movie, id) => ({
    type: types.UPDATE_MOVIE,
    movie,
    id
});

export const updateMovieUnique = (movie, id) => (dispatch, getState) => {
    const { movies } = getState();
    dispatch(resetError());
    if (movies.items
        .filter(m => m.id !== movies.selectedId)
        .findIndex(m => m.title === movie.title) === -1) {
        dispatch(updateMovie(movie, id));
        dispatch(toggleForm());
    }
    else {
        dispatch(showError(`${strings.UNIQUE_TITLE_ERROR}: ${movie.title}`));
    }
};

/**
 * SELECT_FOR_EDIT action creator.
 * Select a movie for editing.
 * @param {string} id - The id of the movie selected for editing.
 */
export const selectForEdit = id => ({
    type: types.SELECT_FOR_EDIT,
    id
});

/**
 * REQUEST_MOVIES action creator.
 * Make ajax call to movies API to receive movie list.
 */
export const requestMovies = () => ({
    type: types.REQUEST_MOVIES
});

/**
 * RECEIVE_MOVIES action creator.
 * Receive response from movies API and parse it.
 * @param {Array} movies - The response from the API.
 */
export const receiveMovies = movies => ({
    type: types.RECEIVE_MOVIES,
    movies
});

/**
 * Handle the actual API call and dispatch RECEIVE_MOVIES action.
 */
export const fetchMovies = () => async dispatch => {
    dispatch(requestMovies());
    const movies = await transportLayer.getMovies(titles);
    return dispatch(receiveMovies(movies));
};

// UI related

/**
 * SHOW_FORM action creator.
 * @param {string} mode - The mode of the form (add/edit).
 */
const showFormNoReset = mode => ({
    type: types.SHOW_FORM,
    mode
});

export const showForm = mode => (dispatch, getState) => {
    dispatch(resetError());
    dispatch(showFormNoReset(mode));
}

/**
 * TOGGLE_FORM action creator.
 */
const toggleFormNoReset = () => ({
    type: types.TOGGLE_FORM
});

export const toggleForm = () => (dispatch, getState) => {
    dispatch(resetError());
    dispatch(toggleFormNoReset());
}

export const toggleDeleteConfirm = id => ({
    type: types.TOGGLE_DELETE_CONFIRM,
    id
});

export const showError = message => ({
    type: types.SHOW_ERROR,
    message
});

export const resetError = () => ({
    type: types.RESET_ERROR
});