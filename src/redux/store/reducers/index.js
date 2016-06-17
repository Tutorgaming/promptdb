// Reducers Index

var Redux = require("redux"),
	authReducer = require("./auth"),
	memberReducer = require("./members");

import { routerReducer }      from 'react-router-redux'
	//membersReducer = require("./quotes"),
	//feedbackReducer = require("./feedback");

var rootReducer = Redux.combineReducers({
	auth: authReducer,
	member: memberReducer,
	routing: routerReducer
});

module.exports = rootReducer;
