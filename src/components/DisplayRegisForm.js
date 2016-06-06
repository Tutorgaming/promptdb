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
                  <AddMemberForm/>
              </div>
              <Footer />
          </div>
        );
  }
}

export default DisplayRegisForm;
