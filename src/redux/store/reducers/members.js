/*
  Name : promptdb
  Member Reducer
  Set the Main App States with the Members Data
  By : Theppasith N.
*/
var ENUM = require("../../constants"),
	initialState = require("../initialstate");

module.exports = function(currentstate,action){
    switch(action.type){
      //WAITING FOR RESPONSE MEMBER POST
      case ENUM.POSTING_MEMBER:
        return Object.assign({},currentstate,{
					isProcessing : action.isProcessing,
          hasreceiveddata: false
        });

      case ENUM.POSTING_MEMBER_ERROR:
        return Object.assign({},currentstate,{
          error : true,
          message : action.message
        });

      case ENUM.SUCCESS_POST:
        return Object.assign({},currentstate,{
          error : false,
					isProcessing : action.isProcessing,
          message : action.message,
					registered : true
        });

			default: return currentstate || initialState.member;

    }

}
