import * as types from '../constants/ActionTypes';

/**
 * ADD_MOVIE action creator
 * @param {Object} movie - The movie to add
 */
export const addMovie = movie => ({
    type: types.ADD_MOVIE,
    movie
});

/**
 * DELETE_MOVIE action creator
 * @param {number} id 
 */
export const deleteMovie = id => ({
    type: types.DELETE_MOVIE,
    id
});






/**
 * SHOW_FORM action creator
 * @param {string} mode - The mode of the form (add/edit)
 */
export const showForm = mode => ({
    type: types.SHOW_FORM,
    mode
});

/**
 * TOGGLE_FORM action creator
 */
export const toggleForm = () => ({
    type: types.TOGGLE_FORM
});