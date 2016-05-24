/*
  Name : React Playground
  List of All Quiz
  By : Theppasith N.
*/

import React from "react";
import ReactDOM from 'react-dom';
import {Panel,Col,Button} from "react-bootstrap";

//A Class for Single Question to Display
class Question extends React.Component{

    constructor(){
      super();
      this.state = {
        haveAnswer: false,
        trueAnswer: 0
      };
    }

    validateAnswer(answer){

        this.setState({haveAnswer:true , trueAnswer : this.props.data.answer});
        console.log("[Q:"+ this.props.data.id + "]you answer : " + answer);
        //Transfer Score to main game state
        // This.props.addAnswer(question_id,answer)
    }

    render(){
      console.log("Receive Single item");
      console.log(this.props.data);

      // Display Question id as Panel Header
      let headerString = "Question " + this.props.data.id + ": " +
      this.props.data.question + "Answer is choice : " + this.props.data.answer ;
      let isAnswer = true;
      // Return Render Function Per One Question
      return (
      <div>
          <div className="row">
          <Col md={12}>
              <Panel header={headerString}>
              <div className="row">
                  <Col md={6}>
                      <Button ref="ans_1"
                      bsStyle ={(this.state.trueAnswer==1&&this.state.haveAnswer)? "success":"default"}
                      onClick={this.validateAnswer.bind(this,this.props.data.choice1)}
                      disabled={this.state.haveAnswer} block>
                          {this.props.data.choice1}
                      </Button>
                  </Col>
                  <Col md={6}>
                      <Button ref="ans_2"
                      bsStyle ={(this.state.trueAnswer==2&&this.state.haveAnswer)? "success":"default"}
                      onClick={this.validateAnswer.bind(this,this.props.data.choice2)}
                      disabled={this.state.haveAnswer} block>
                          {this.props.data.choice2}
                      </Button>
                  </Col>
              </div>

              <div className="row">
                  <Col md={6}>
                      <Button ref="ans_3"
                      onClick={this.validateAnswer.bind(this,this.props.data.choice3)}
                      bsStyle ={(this.state.trueAnswer==3&&this.state.haveAnswer)? "success":"default"}
                      disabled={this.state.haveAnswer} block>
                            {this.props.data.choice3}
                      </Button>
                  </Col>
                  <Col md={6}>
                      <Button ref="ans_4"
                      onClick={this.validateAnswer.bind(this,this.props.data.choice4)}
                      bsStyle ={(this.state.trueAnswer==4&&this.state.haveAnswer)? "success":"default"}
                      disabled={this.state.haveAnswer} block>
                          {this.props.data.choice4}
                      </Button>
                  </Col>
              </div>

              </Panel>
          </Col>
          </div>
      </div>
      );
    }
}
export default Question;


// Quiz List ( Hold a lot of Question )
class QuizList extends React.Component{
    constructor(props){
      super(props);
      //Receive items From Parent (via properties of this object)
      this.state = {questions: this.props.items};
    }

    processingAnswer(question_id,answer){
      
    }

    render(){
      console.log("QuizList");
      let question_items = this.state.questions.map(
        function(question_item,i){
          return <Question data={question_item} key={i} />
        });
        return (
            <Panel header="Quiz List !">
              {question_items}
            </Panel>
        );
    }
}
export default QuizList;
