import * as types from '../constants/ActionTypes';

/**
 * ADD_MOVIE action creator
 * @param {Object} movie - The movie to add
 */
export const addMovie = movie => ({
  type: types.ADD_MOVIE,
  movie
});