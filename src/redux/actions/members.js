/*
  Name : promptdb
  Member Actions
  CRUD with Databases
  By : Theppasith N.
*/

import * as ENUM from '../constants';
import firebase from 'firebase';
import {fireRef} from './auth'
// var fireRef = firebase.initializeApp(ENUM.FIREBASE_CONFIG);
const database = firebase.database();
const memberDatabase = database.ref('members');

module.exports = {
  //Save a Single Member onto Database
  saveMember: function(formData){
      return function(dispatch,getState){
          var state = getState();
          var memberState = formData;

          //TODO: Check Access Token Here
          var member = {
            id           : memberState.stdid,
            firstname    : memberState.firstname,
            lastname     : memberState.lastname,
            room         : memberState.roomid,
            email        : memberState.email,
            workplace    : memberState.workplace,
            phone        : memberState.phone,
            facebook_id  : memberState.facebook_id
          };

          // REDUX : EMIT THE POSTING (waiting state)
          dispatch({
            type: ENUM.POSTING_MEMBER,
            isProcessing: true
          });

          // Post Data to database
          memberDatabase.push(member,function(error){
              if(error){
                  dispatch({
                    type:ENUM.POSTING_MEMBER_ERROR,
                    message: error
                  });
              }else{
                  dispatch({
                    type:ENUM.SUCCESS_POST,
                    isProcessing: false,
                    message: "Post Member to Database Successfully."
                  });
                  // Redirect To

              }
          });
      }
  },
  helloWorld: function(){
    return function(dispatch,getState){
      console.log("Hello World from Member Moudules");
    }
  },
  fetchMember: function(memberid){
    return function(dispatch,getState){
      var member = {
        id           : null,
        firstname    : null,
        lastname     : null,
        room         : null,
        email        : null,
        workplace    : null,
        phone        : null,
        facebook_id  : null
      };

    }
  }
}
