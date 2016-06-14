// Reducers Index

var Redux = require("redux"),
	authReducer = require("./auth");
import { routerReducer }      from 'react-router-redux'
	//membersReducer = require("./quotes"),
	//feedbackReducer = require("./feedback");

var rootReducer = Redux.combineReducers({
	auth: authReducer,
	routing: routerReducer
});

module.exports = rootReducer;
