import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import { fetchMovies } from './actions';
import App from './containers/App'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
};

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch(fetchMovies());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);