import React from "react";

//React Components
import MainEntry from "./components/MainEntry.js"
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
          <MainEntry/>
      </div>
    );
  }
}

export default App;
