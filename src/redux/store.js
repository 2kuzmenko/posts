import { createStore, compose, applyMiddleware } from "redux";
import reducer from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = process.env.NODE_ENV !==
      'production' && typeof window !==
        'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, composeEnhancers(middleware));

export default store;