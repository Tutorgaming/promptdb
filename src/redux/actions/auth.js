/*
  Name : React Playground
  Authentication Action
  Based on Firebase
  By : Theppasith N.
*/

import * as ENUM from '../constants';
import Firebase from 'firebase';

var fireRef = new Firebase(ENUM.FIREBASE);

module.export ={
  // Check Existing Authentication
  startListeningToAuth: function(){
    return function(dispatch,getState){
      fireRef.onAuth(function(authData){
        //After Authen with fireRef the Data = authData
        if(authData){
            dispatch(
              {
                type: ENUM.LOGIN_USER,
                uid: authData.uid,
                username: authData.facebook.displayName
              }
            );
        }else{
          if(getState().auth.currently !== ENUM.ANONYMOUS){
              // No Authentication Data
              // Current State must be ANONYMOUS
              // If Not => Logout
              dispatch(
                  {
                    type: ENUM.LOGOUT
                  }
              );
          }
        }
      })
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
        // Do The Authentication Things
        // Select "Facebook" as main auth
  			fireRef.authWithOAuthPopup("facebook", function(error, authData) {
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
  			});
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
