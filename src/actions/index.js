import * as types from '../constants/ActionTypes';

/**
 * ADD_MOVIE action creator.
 * Create a new movie in the state.
 * @param {Object} movie - The movie to add.
 */
export const addMovie = movie => ({
    type: types.ADD_MOVIE,
    movie
});

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
 * @param {Object} data - The movie data to update.
 * @param {string} id - The id of the movie to update.
 */
export const updateMovie = (data, id) => ({
    type: types.UPDATE_MOVIE,
    data,
    id
});

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
 * SHOW_FORM action creator.
 * @param {string} mode - The mode of the form (add/edit).
 */
export const showForm = mode => ({
    type: types.SHOW_FORM,
    mode
});

/**
 * TOGGLE_FORM action creator.
 */
export const toggleForm = () => ({
    type: types.TOGGLE_FORM
});