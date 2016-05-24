/*
  Name : React Playground
  Main Quiz Game Entry
  By : Theppasith N.
*/

import React from "react";
import { PropTypes } from "react"
import ReactDOM from "react-dom";
import { Panel , FormGroup , ControlLabel , FormControl , Col , Button } from "react-bootstrap";
import QuizAddForm from './QuizAddForm.js'
import QuizList from './QuizList.js'

// Game Nav Bar
class GameNavBar extends React.Component {
  constructor(props){
    super(props);
  }

  // Rendering Method
  render() {
    return (
        <Panel>
          <div class = "HeaderBar" >
            <span>
              <Button bsStyle="primary" onClick={this.props.onShowQuizAddFormClick}>Quiz Add Form !</Button>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              <Button bsStyle="primary" onClick={this.props.onShowQuizListClick}>Quiz List</Button>
            </span>
            &nbsp;&nbsp;&nbsp;
          </div>
        </Panel>
    );
  }
}
export default GameNavBar;


// Main Game
class QuizGame extends React.Component{

      constructor(){
        super();
      this.state = {answers: [] ,questions:[] , question_id:0 , showQuizList : false , showQuizAddForm : false};
      }

      onAddQuiz(quiz){
        //Add up the Quiz Counter
        quiz.id = ++this.state.question_id;
        //Add Question into Pool
        this.state.questions.push(quiz);
        //SetState For Reactive Changes
        this.setState({questions: this.state.questions
          , question_id : this.state.question_id});
      }

      showQuizList(){
        this.setState({
          showQuizList     : true ,
          showQuizAddForm  : false
        });
      }

      showQuizAddForm(){
        this.setState({
          showQuizList    : false ,
          showQuizAddForm : true
        });
      }

      render(){
        return (
          <div>
              <GameNavBar onShowQuizListClick={this.showQuizList.bind(this)}
                onShowQuizAddFormClick = {this.showQuizAddForm.bind(this)}/>

               { this.state.showQuizList ?  <QuizList items={this.state.questions} answers={this.state.answers}/> : null }
               { this.state.showQuizAddForm ?  <QuizAddForm onAddQuiz={this.onAddQuiz.bind(this)} /> : null }
          </div>
        );
      }
  }
export default QuizGame;
