/*
  Name : promptDB
  Display Regis Form
  By : Theppasith N.
*/
import React from "react";
import CardContainer from "./CardContainer";
import AddMemberForm from "./AddMemberForm";
import {connect} from "react-redux";
// NavBar
import Header from "./Header";
import Footer from "./Footer";
// Main Entry of this app
class DisplayRegisForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
        return (
          <div>
              <Header />
                  <div className="container">
                  {(this.props.member.registered)?
                    <div> REGISTER SUCCESS !  </div>
                        :
                    <AddMemberForm user = {this.props.auth}/>
                  }
                  </div>
              <Footer />
          </div>
        );
  }
}

export default DisplayRegisForm;


var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth,member:appState.member};
};


module.exports = connect(mapStateToProps)(DisplayRegisForm);
