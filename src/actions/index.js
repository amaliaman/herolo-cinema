import * as types from '../constants/ActionTypes';

export const addMovie = movie => ({
  type: types.ADD_MOVIE,
  movie
});