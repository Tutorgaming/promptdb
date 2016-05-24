import React from "react";

//React Components
import JumboQuote from "./components/JumboQuote.js"
import QuizGame from "./components/QuizGame.js";
import FooterBar from "./components/FooterBar.js"
import { Col } from 'react-bootstrap';

// Main App
class App extends React.Component {
  constructor(){
    super();
  }

  // Rendering Method
  render() {
    return (
      <div className = "container" >
          <JumboQuote />
          <QuizGame/>
      </div>
    );
  }
}

export default App;
