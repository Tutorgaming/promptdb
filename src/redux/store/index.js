/*
    Store index

*/

/*
var Redux = require("redux"),
	rootReducer = require("./reducers"),
	initialState = require("./initialstate"),
	thunk = require('redux-thunk'); // allows us to use asynchronous actions


// A super-simple logger
var logger = store => next => action => {
	console.log('dispatching', action.type,action)
	var result = next(action)
	console.log('next state', store.getState())
	return result
}


module.exports = Redux.applyMiddleware(thunk,logger)(Redux.createStore)(rootReducer,initialState);
*/
/*
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import initialState from './initialstate'

const loggerMiddleware = createLogger();

// A super-simple logger
var logger = store => next => action => {
	console.log('dispatching', action.type,action)
	var result = next(action)
	console.log('next state', store.getState())
	return result
}

const store = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)(createStore)(rootReducer, initialState);

export default store;*/

import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
	const logger = createLogger();
	middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer);
export default store;
