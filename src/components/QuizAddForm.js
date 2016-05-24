/*
  Name : React Playground
  Quiz add form
  By : Theppasith N.
*/

import React from "react";
import { PropTypes } from "react"
import ReactDOM from "react-dom";
import {DropdownButton, MenuItem,Panel , FormGroup , ControlLabel , FormControl , Col , Button} from "react-bootstrap";

// Implementation of The Form Here !
class QuizAddForm extends React.Component {

  constructor(){
    super();
    this.state = {
      question : '',
      choice1: '',
      choice2: '',
      choice3: '',
      choice4: '',
      answer:''
    };
  }

  clearQuestion(){
    this.state = {
      question : '',
      choice1: '',
      choice2: '',
      choice3: '',
      choice4: '',
      answer:''
    };
   ReactDOM.findDOMNode(this.refs.question_ref).value = "";
   ReactDOM.findDOMNode(this.refs.choice1_ref).value = "";
   ReactDOM.findDOMNode(this.refs.choice2_ref).value = "";
   ReactDOM.findDOMNode(this.refs.choice3_ref).value = "";
   ReactDOM.findDOMNode(this.refs.choice4_ref).value = "";
   ReactDOM.findDOMNode(this.refs.answer_ref).reset;

  }
  // update on any textbox change
  update(e){
    this.setState({
      question  :  ReactDOM.findDOMNode(this.refs.question_ref).value,
      choice1   :  ReactDOM.findDOMNode(this.refs.choice1_ref).value,
      choice2   :  ReactDOM.findDOMNode(this.refs.choice2_ref).value,
      choice3   :  ReactDOM.findDOMNode(this.refs.choice3_ref).value,
      choice4   :  ReactDOM.findDOMNode(this.refs.choice4_ref).value,
      answer    :  ReactDOM.findDOMNode(this.refs.answer_ref).value
    });

  }

  handleQuestionSubmit(e){
    e.preventDefault();
    //Submitting The Form Goes Here
    // Calling Props (onAddQuiz From Parent)
    this.props.onAddQuiz(this.state);
    //this.props.onAddQuiz(this.state);
    this.clearQuestion();
  }

  render(){
    return (<div>
      <Panel header="Quiz Add Here !" bsStyle="primary">
      <form>
          <FormGroup controlId="formControlsText">
              <ControlLabel>Question : </ControlLabel>
              <FormControl ref="question_ref" type="text" placeholder="Enter Question Here" />
          </FormGroup>

          <FormGroup controlId="formControlsText">
              <Col md={6}>
                  <ControlLabel>Choice 1 : </ControlLabel>
                  <FormControl ref="choice1_ref" onChange={this.update.bind(this)} type="text" placeholder="Enter Choice 1 Here" />
              </Col>
              <Col md={6}>
                  <ControlLabel>Choice 2 : </ControlLabel>
                  <FormControl ref="choice2_ref" onChange={this.update.bind(this)} type="text" placeholder="Enter Choice 2 Here" />
              </Col>
              <Col md={6}>
                  <ControlLabel>Choice 3 : </ControlLabel>
                  <FormControl ref="choice3_ref" onChange={this.update.bind(this)} type="text" placeholder="Enter Choice 3 Here" />
              </Col>
              <Col md={6}>
                  <ControlLabel>Choice 4 : </ControlLabel>
                  <FormControl ref="choice4_ref" onChange={this.update.bind(this)} type="text" placeholder="Enter Choice 4 Here" />
              </Col>
              <Col md={6}>
                  <ControlLabel> Answer is : </ControlLabel>
                  &nbsp;&nbsp;&nbsp;
                  <FormControl ref="answer_ref" onChange = {this.update.bind(this)} componentClass="select" placeholder="Select Answer">
                      <option key="1" value="1">1</option>
                      <option key="2" value="2">2</option>
                      <option key="3" value="3">3</option>
                      <option key="4" value="4">4</option>
                  </FormControl>

                  </Col>
              <Col md={6}>
              </Col>
          </FormGroup>
          <hr/>
          <FormGroup controlId="formControlsText">
              <div className = "row">
                  <Col md={6}>
                      <br/>
                      <center>
                      <Button bsStyle="primary" onClick={this.handleQuestionSubmit.bind(this)}>Submit Question</Button>
                      </center>
                  </Col>
              </div>
          </FormGroup>
      </form>
      </Panel>
      </div>
    );
  }
}

export default QuizAddForm;
QuizAddForm.propTypes = { onAddQuiz: React.PropTypes.func };
