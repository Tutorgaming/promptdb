/*
  Name : promptDB
  Main entry Pages Goes here
  By : Theppasith N.
*/
import React from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";
import AddMemberForm from "./AddMemberForm";
// Main Entry of this app
class MainEntry extends React.Component {
  constructor(props) {
    super(props);
    this.prepareTestData.bind(this);
    this.state = {
          datas :[]
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
    let regis = true;
    this.prepareTestData(22); // Mockup Data
    if(!regis){
        return (
          <div>
              <h1>Prompt51 Alumni Database</h1>
            {/*<RegisterNewAlumni></RegisterNewAlumni>
              <AlumniList></AlumniList>*/}
              <CardContainer datas = {this.state.datas} ></CardContainer>
          </div>
        );
    }else{
      return(
          <div>
              <Header></Header>
              <AddMemberForm></AddMemberForm>
          </div>
      );
    }
  }
}

export default MainEntry;
