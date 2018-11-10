import { combineReducers } from 'redux';
import uuidv4 from 'uuid/v4';

import * as types from '../constants/ActionTypes';
import { FORM_MODES } from '../constants/Strings';

const initialState = {
    movies: {
        isFetching: false,
        items: [],
        selectedId: ''
    },
    form: {
        isOpen: false,
        mode: FORM_MODES.ADD
    }
};

//////////////
const aa = {
    director: "aaPhil Tippett",
    genre: "aaAction, Adventure, Horror, Sci-Fi",
    id: "aaa18da55f-efb5-4211-baae-f2b38e9e5def",
    runtime: "aa88 min",
    title: "aaStarship Troopers 2 Hero Of The Federation",
    year: "aa2004"
}
/////////////////////////////////////
const movies = (state = /* initialState.movies */{
    isFetching: false,
    items: [aa],
    selectedId: ''
}, action) => {
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
                items: state.items.filter(movie => movie.id !== action.id)
            };
        case types.SELECT_FOR_EDIT:
            return {
                ...state,
                selectedId: action.id
            };
        case types.UPDATE_MOVIE:
            return {
                ...state,
                selectedId: '',
                items: state.items.map(movie => {
                    if (movie.id === action.id) {
                        return {
                            ...movie,
                            ...action.data
                        }
                    }
                    else return movie;
                })
            }
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

const rootReducer = combineReducers({
    movies,
    form
});

export default rootReducer;