/*
  Name : promptDB
  Display Regis Form
  By : Theppasith N.
*/
import React from "react";
import CardContainer from "./CardContainer";
import AddMemberForm from "./AddMemberForm";
// NavBar
import Header from "./Header";

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
                  <AddMemberForm/>
              </div>
          </div>
        );
  }
}

export default DisplayRegisForm;
