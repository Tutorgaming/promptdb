/*
  Name : React Playground
  Enumerator for redux state,actions
  By : Theppasith N.
*/
module.exports = {
  // ACTIONS
      // UI FEEDBACK ACTIONS
      HELLO: "HELLO",
      DISPLAY_ERROR: "DISPLAY_ERROR",
      FIREBASE : "https://promptdb-cafa2.firebaseapp.com",
      FIREBASE_CONFIG : {
        apiKey: "AIzaSyD0LHia7PRYsIKgm6DWEPA6QpxPaID4khM",
        authDomain: "promptdb-cafa2.firebaseapp.com",
        databaseURL: "https://promptdb-cafa2.firebaseio.com",
        storageBucket: "promptdb-cafa2.appspot.com"
      },
      // QUOTE ACTIONS
    	RECEIVE_MEMBER_DATA: "RECEIVE_MEMBER_DATA",
    	AWAIT_NEW_MEMBER_RESPONSE: "AWAIT_NEW_MEMBER_RESPONSE",
    	RECEIVE_NEW_MEMBER_RESPONSE: "RECEIVE_NEW_MEMBER_RESPONSE",
    	START_MEMBER_EDIT: "START_MEMBER_EDIT",
    	FINISH_MEMBER_EDIT: "FINISH_MEMBER_EDIT",
    	SUBMIT_MEMBER_EDIT: "SUBMIT_MEMBER_EDIT",
      SUCCESS_POST: "SUCCESS_POST",
      POSTING_MEMBER: "POSTING_MEMBER",

    	// AUTH ACTIONS
    	ATTEMPTING_LOGIN: "ATTEMPTING_LOGIN",
    	LOGIN_USER: "LOGIN_USER",
    	LOGOUT: "LOGOUT",

  // STATES
    	// AUTH STATES
    	LOGGED_IN: "LOGGED_IN",
    	ANONYMOUS: "ANONYMOUS",
    	AWAITING_AUTH_RESPONSE: "AWAITING_AUTH_RESPONSE",

    	// QUOTE STATES
      WAITING_DB_RESPONSE: "WAITING_DB_RESPONSE",
    	EDITING_MEMBER: "EDITING_MEMBER",
    	SUBMITTING_MEMBER: "SUBMITTING_MEMBER"

};
