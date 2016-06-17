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
	},
	member: {
		id           : null,
		firstname    : null,
		lastname     : null,
		room         : null,
		email        : null,
		workplace    : null,
		phone        : null,
		facebook_id  : null,
		isProcessing : false,
		registered : false
	}
};
