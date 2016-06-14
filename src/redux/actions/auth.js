/*
  Name : React Playground
  Authentication Action
  Based on Firebase
  By : Theppasith N.
*/

import * as ENUM from '../constants';
import firebase from 'firebase';

const fireRef = firebase.initializeApp(ENUM.FIREBASE_CONFIG);

module.exports ={
  // Check Existing Authentication
  startListeningToAuth: function(){
    return function(dispatch,getState){
      var auth = firebase.auth();
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      auth.signInWithPopup(provider).then(function(result) {
          var accessToken = result.credential.accessToken;
          var fbid = result.user.providerData[0].uid;
          var largepic = "http://graph.facebook.com/" + fbid + "/picture?type=large";
          var picurl = "http://graph.facebook.com/" + fbid + "/picture?type=square";
          dispatch(
            {
              type: ENUM.LOGIN_USER,
              uid: result.user.uid,
              fbusername: result.user.displayName,
              fbid:fbid,
              logged_in: true,
              largepic: largepic,
              picurl: picurl
            }
          );
      });
      /*
      fireRef.onAuth(function(authData){
        if(authData){
            console.log(authData);
            dispatch(
              {
                type: ENUM.LOGIN_USER,
                uid: authData.uid,
                username: authData.facebook.displayName
              }
            );
        }else{
          if(getState().auth.currently !== ENUM.ANONYMOUS){
              dispatch(
                  {
                    type: ENUM.LOGOUT
                  }
              );
          }
        }
      })*/
    }
  }
  ,
  attemptLogin: function(){
    // Return a function which Attempting Login
		return function(dispatch,getState){
  			dispatch(
            {
              type:ENUM.ATTEMPTING_LOGIN
            }
        );
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          // TODO : APPLY THE ACTION HERE AFTER SUCCESSFUL LOGIN
          console.log("Login Successful via Firebase. ");

        }).catch(function(error) {
          var errorCode = error.code;
          var credential = error.credential;

        });


  			/*fireRef.authWithOAuthPopup("facebook", function(error, authData) {
  				if (error) {
            // Do the Error Display
            dispatch(
                {
                  type:ENUM.DISPLAY_ERROR,error:"Login failed! "+error
                }
            );
            // Error => Logout
  					dispatch(
                {
                  type:ENUM.LOGOUT
                }
            );
  				} else {
            console.log("Auth Success");
            console.log(authData);
  					// Authentication Success
  				}
  			});*/
		}
	}
  ,
  //
	logoutUser: function(){
    // Return a function which attempting logout
		return function(dispatch,getState){
			dispatch(
        {
          type:ENUM.LOGOUT
        }
      );
      // Call Fireauth to unAuth oAuth also
			fireRef.unauth();
		}
	}

};
