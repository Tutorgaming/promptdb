/*
  Name : promptDB
  Display List Of All Entries Here
  By : Theppasith N.
*/
import React from "react";
import CardContainer from "./CardContainer";
import AddMemberForm from "./AddMemberForm";
import {PageHeader,Form,Col,Panel,FormGroup, ControlLabel, FormControl} from "react-bootstrap";

// NavBar
import Header from "./Header";
import Footer from "./Footer";

// Main Entry of this app
class DisplayAll extends React.Component {
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
      // Not implemented Yet
    // Generate Mockup Data For Usage
    this.prepareTestData(22);
    // Return The Result via html element
        return (
          <div>
              <Header />
              <div className="container">
                  <PageHeader>Alumni Display - <small> ข้อมูลศิษย์เก่า     </small>
                  { (this.props.params.roomId)?  `ห้อง ${this.props.params.roomId}`:"แสดงทั้งหมด"}
                  </PageHeader>
                  <hr/>
                  <CardContainer datas = {this.state.datas} ></CardContainer>
              </div>
              <Footer />
          </div>
        );
  }
}

export default DisplayAll;
