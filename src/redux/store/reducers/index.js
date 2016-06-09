// Reducers Index

var Redux = require("redux"),
	authReducer = require("./auth");
	//membersReducer = require("./quotes"),
	//feedbackReducer = require("./feedback");

var rootReducer = Redux.combineReducers({
	auth: authReducer

});

module.exports = rootReducer;
