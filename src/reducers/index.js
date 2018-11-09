import { combineReducers } from 'redux';
import * as types from '../constants/ActionTypes';

const movies = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return state.concat([action.movie]);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies
})

export default rootReducer;