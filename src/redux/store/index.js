/*
    Store index

*/

import * as Redux from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import initialState from './initialstate'
import thunk from 'redux-thunk'


// A super-simple logger
var logger = store => next => action => {
	console.log('dispatching', action.type,action)
	var result = next(action)
	console.log('next state', store.getState())
	return result
}


module.exports = Redux.applyMiddleware(thunk,logger)(Redux.createStore)(rootReducer,initialState);
