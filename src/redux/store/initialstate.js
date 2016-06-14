/*
This is the initial state of the Redux Store.
*/

var C = require("../constants");

module.exports = {
	auth: {
		currently: C.ANONYMOUS,
		username: null,
		uid: null,
		fbusername: null,
		fbid:null,
		logged_in: false,
		largepic: null,
		picurl: null
	}
};
