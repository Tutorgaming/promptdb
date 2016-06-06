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
    // Call The Redux To Get Login Infomation
    // Picture -> Facebook Profile

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
                          <FormControl ref="firstname_ref" type="text" placeholder="Enter Firstname" value={""} />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
            <br/>
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Lastname / นามสกุล </ControlLabel>
                      <Col md={4}>
                          <FormControl ref="lastname_ref" type="text" placeholder="Enter Lastname" value={""} />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
              <br/>
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Student id. / เลขประจำตัวนักเรียน</ControlLabel>
                      <Col md={4}>
                          <FormControl ref="stdid_ref" type="text" placeholder="Enter Student id (2XXXX)" value={""}></FormControl>
                      </Col>
                      <Col md={4}/>
              </FormGroup>
              <br/>
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>E-mail</ControlLabel>
                      <Col md={4}>
                          <FormControl ref="email_ref" type="text" placeholder="Enter Email" value={""} />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
              <br/>
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>สถานที่ทำงาน</ControlLabel>
                      <Col md={4}>
                          <FormControl ref="workplace_ref" type="text" placeholder="Enter Workplace" value={""} />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
              <br/>
                <FormGroup controlId="formControlsText">
                    <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Contact Number / เบอร์โทรติดต่อ</ControlLabel>
                        <Col md={4}>
                            <FormControl ref="phone_ref" type="text" placeholder="Enter Phone No." value={""} />
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
