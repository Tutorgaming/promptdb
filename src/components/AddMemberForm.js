/*
  Name : promptDB
  Member Register Page for single user
  By : Theppasith N.
*/
import React from "react";
import ReactDOM from "react-dom";
import {Button, PageHeader,Form,Col,Panel,FormGroup, ControlLabel, FormControl} from "react-bootstrap";

class AddMemberForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      form : {} ,
      facebook : this.props.user
    }; // Schema Field
    // Call The Redux To Get Login Infomation
    // Picture -> Facebook Profile

  }

  handleFormChange(e){
    this.setState({ form : {
       firstname  :  ReactDOM.findDOMNode(this.refs.firstname_ref).value,
       lastname   :  ReactDOM.findDOMNode(this.refs.lastname_ref).value,
       stdid   :  ReactDOM.findDOMNode(this.refs.stdid_ref).value,
       roomid : ReactDOM.findDOMNode(this.refs.roomid_ref).value,
       email   :  ReactDOM.findDOMNode(this.refs.email_ref).value,
       workplace   :  ReactDOM.findDOMNode(this.refs.workplace_ref).value,
       phone    :  ReactDOM.findDOMNode(this.refs.phone_ref).value,
       facebook_id: 1234567890
     }
   });
  }

  handleFormSubmit(){
    alert("form Subbmitted");
    // If Success
    // TransitionTo(/Room)
  }

  render(){
    return (
        <div className="regisform">
          <PageHeader>Registration Form - <small> ลงทะเบียนใหม่</small></PageHeader>
          <hr/>
          <Panel bsStyle="primary">
            <Panel bsStyle="primary" header="Facebook Login Status">
                <h2>Facebook Login Status : {this.state.facebook.fbusername} </h2>
            </Panel>

          <h3>Registration Form</h3>
          <br/>
          <center>กรุณาลงทะเบียนด้วยชื่อจริง และ นามสกุล ที่ใช้ขณะศึกษาอยู่ที่มงฟอร์ตวิทยาลัย  (มีการตรวจสอบกับฐานข้อมูลเก่า) </center>
          <br/>
          <hr/>
          <div className="row">
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Firstname / ชื่อจริง </ControlLabel>
                      <Col md={4}>
                          <FormControl ref="firstname_ref" onChange={this.handleFormChange.bind(this)}  type="text" placeholder="Enter Firstname" />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
          </div>
          <div className="row">
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Lastname / นามสกุล </ControlLabel>
                      <Col md={4}>
                          <FormControl ref="lastname_ref" onChange={this.handleFormChange.bind(this)} type="text" placeholder="Enter Lastname"  />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
          </div>
          <div className="row">
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Student id. / เลขประจำตัวนักเรียน </ControlLabel>
                      <Col md={4}>
                          <FormControl ref="stdid_ref" onChange={this.handleFormChange.bind(this)} type="text" placeholder="Enter Student id (2XXXX)" ></FormControl>
                      </Col>
                      <Col md={4}/>
              </FormGroup>
          </div>
          <div className="row">
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Room Number / ห้อง </ControlLabel>
                      <Col md={4}>
                          <FormControl ref="roomid_ref" onChange={this.handleFormChange.bind(this)} componentClass="select" placeholder="Select Room" >
                            <option key="1" value="1">1</option>
                            <option key="2" value="2">2</option>
                            <option key="3" value="3">3</option>
                            <option key="4" value="4">4</option>
                            <option key="5" value="5">5</option>
                            <option key="6" value="6">6</option>
                            <option key="7" value="7">7</option>
                            <option key="8" value="8">8</option>
                            <option key="9" value="9">9</option>
                            <option key="10" value="10">10</option>
                            <option key="11" value="11">11</option>
                            <option key="12" value="12">12</option>
                            <option key="EP" value="EP">EP</option>
                          </FormControl>
                      </Col>
                      <Col md={4}/>
              </FormGroup>
          </div>
          <div className="row">
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>E-mail</ControlLabel>
                      <Col md={4}>
                          <FormControl ref="email_ref" onChange={this.handleFormChange.bind(this)} type="text" placeholder="Enter Email"  />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
          </div>
          <div className="row">
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>สถานที่ทำงาน</ControlLabel>
                      <Col md={4}>
                          <FormControl ref="workplace_ref" onChange={this.handleFormChange.bind(this)} type="text" placeholder="Enter Workplace"  />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
          </div>
          <div className="row">
              <FormGroup controlId="formControlsText">
                  <ControlLabel className ="col-md-4" style={{textAlign:"right",marginTop:9+"px"}}>Contact Number / เบอร์โทรติดต่อ</ControlLabel>
                      <Col md={4}>
                          <FormControl ref="phone_ref" onChange={this.handleFormChange.bind(this)} type="text" placeholder="Enter Phone No."  />
                      </Col>
                      <Col md={4}/>
              </FormGroup>
          </div><hr/>
              <FormGroup controlId="formControlsText">
                  <div className = "row">
                      <Col md={12}>
                          <center>
                          <Button bsStyle="primary" onClick={this.handleFormSubmit.bind(this)}>ลงทะเบียน / Submit Registration</Button>
                          </center>
                      </Col>
                  </div>
              </FormGroup>


          </Panel>
        </div>

    );
  }
}
export default AddMemberForm;
