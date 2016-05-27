/*
  Name : promptDB
  Main entry Pages Goes here
  By : Theppasith N.
*/
import React from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";
import Gallery from "./Gallery"
import AddMemberForm from "./AddMemberForm";
// Main Entry of this app
class MainEntry extends React.Component {
  constructor(props) {
    super(props);
    this.prepareTestData.bind(this);
    this.state = {
          datas :[]
          //Login Credential might be included here
    };
  }

  // Generate Mockup Data
  prepareTestData(amount){
    for( var i = 0 ; i < amount ; i++){
      this.state.datas.push(i);
    }
  }

  // Rendering Method
  render(){
    // Get Data From Server
    let regis = false;
    this.prepareTestData(22); // Mockup Data
    if(!regis){
        return (
          <div>
              <Header></Header>
              {/*<h1 className="overlayTitleText">Prompt51 Alumni Database</h1> Move to Gallery*/}
              <Gallery></Gallery>

              <div className="container">
                  <AddMemberForm></AddMemberForm>
                  <CardContainer datas = {this.state.datas} ></CardContainer>
              </div>
          </div>
        );
    }else{
      return(
          <div>
              {//FACEBOOK LOGIN Page
              }
          </div>
      );
    }
  }
}

export default MainEntry;
