/*
  Name : promptDB
  Member Register Page for single user
  By : Theppasith N.
*/
import React from "react";
import {PageHeader,Form,Col,Panel,FormGroup, ControlLabel, FormControl} from "react-bootstrap";

/*
  Must have :
  - Facebook Token
  - Group ID Found or Not ?
    - Group ID List For Each Room
  -
*/

class AddMemberForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {}; // Schema Field
  }
  render(){
    return (
        <div>
          <PageHeader>Registration Form - <small> ลงทะเบียนใหม่</small></PageHeader>
          <hr/>
          <Panel bsStyle="primary">
            <Panel bsStyle="primary" header="Facebook Login Status">
                <h2>Facebook Login Status : </h2>
            </Panel>
          <hr/>
          <h3>Registration Form</h3>
          <br/>
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Firstname / ชื่อจริง </ControlLabel>
                      <Col md={4}>
                          <FormControl type="text" placeholder="Enter Firstname" />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
            <br/>
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Lastname / นามสกุล </ControlLabel>
                      <Col md={4}>
                          <FormControl type="text" placeholder="Enter Lastname" />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
              <br/>
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>E-mail</ControlLabel>
                      <Col md={4}>
                          <FormControl type="email" placeholder="Enter Email" />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
              <br/>
          </Panel>
        </div>

    );
  }
}
export default AddMemberForm;
