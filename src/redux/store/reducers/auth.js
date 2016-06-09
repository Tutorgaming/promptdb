var ENUM = require("../../constants"),
	initialState = require("../initialstate");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.auth data.
See `initialstate.js` for a clear view of what it looks like!
*/

module.exports = function(currentstate,action){
	switch(action.type){
		case ENUM.ATTEMPTING_LOGIN:
			return {
				currently: ENUM.AWAITING_AUTH_RESPONSE,
				username: "guest",
				uid: null
			};
		case ENUM.LOGOUT:
			return {
				currently: ENUM.ANONYMOUS,
				username: "guest",
				uid: null
			};
		case ENUM.LOGIN_USER:
			return {
				currently: ENUM.LOGGED_IN,
				username: action.username,
				uid: action.uid
			};
		default: return currentstate || initialState.auth;
	}
};
