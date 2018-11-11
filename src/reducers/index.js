import { combineReducers } from 'redux';
import uuidv4 from 'uuid/v4';

import * as types from '../constants/ActionTypes';
import { FORM_MODES } from '../constants/Strings';

const initialState = {
    movies: {
        isFetching: false,
        items: [],
        selectedId: '',
        selectedTitle: ''
    },
    form: {
        isOpen: false,
        mode: FORM_MODES.ADD
    },
    deleteConfirmation: {
        isOpen: false
    },
    errorMessage: ''
};

const movies = (state = initialState.movies, action) => {
    switch (action.type) {
        case types.ADD_MOVIE:
            const newMovie = {
                ...action.movie,
                id: uuidv4()
            }
            return {
                ...state,
                items: [...state.items, newMovie]
            };
        case types.DELETE_MOVIE:
            return {
                ...state,
                selectedId: '',
                selectedTitle: '',
                items: state.items.filter(movie => movie.id !== action.id)
            };
        case types.SELECT_FOR_EDIT:
            return {
                ...state,
                selectedId: action.id
            };
        case types.TOGGLE_DELETE_CONFIRM:
            if (action.id) {
                return {
                    ...state,
                    selectedId: action.id,
                    selectedTitle: state.items.find(i => i.id === action.id).title
                };
            }
            return state;
        case types.UPDATE_MOVIE:
            return {
                ...state,
                selectedId: '',
                items: state.items.map(movie => {
                    if (movie.id === action.id) {
                        return {
                            ...movie,
                            ...action.movie
                        }
                    }
                    else return movie;
                })
            };
        case types.REQUEST_MOVIES:
            return {
                ...state,
                isFetching: true
            };
        case types.RECEIVE_MOVIES:
            return {
                ...state,
                items: action.movies,
                isFetching: false
            };
        default:
            return state;
    }
};

const form = (state = initialState.form, action) => {
    switch (action.type) {
        case types.SHOW_FORM:
            return {
                ...state,
                isOpen: true,
                mode: action.mode,
            };
        case types.TOGGLE_FORM:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
};

const deleteConfirmation = (state = initialState.deleteConfirmation, action) => {
    switch (action.type) {
        case types.TOGGLE_DELETE_CONFIRM:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
};

const errorMessage = (state = initialState.errorMessage, action) => {
    switch (action.type) {
        case types.SHOW_ERROR:
            return action.message;
        case types.RESET_ERROR:
            return initialState.errorMessage;
        default:
            return state;
    }

};

const rootReducer = combineReducers({
    movies,
    form,
    deleteConfirmation,
    errorMessage
});

export default rootReducer;