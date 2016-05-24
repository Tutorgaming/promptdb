/*
  Name : React Playground
  Jumbotron Quote on the Topmost of the page
  By : Theppasith N.
*/

import React from "react";
import {Jumbotron} from "react-bootstrap";
import NavBar from "./NavBar.js";
class JumboQuote extends React.Component {
  render(){
    return (
      <Jumbotron>
        <h1>Tutor's React Playground :D</h1>
        <p>And it uses the react-bootstrap plugin also ~~ ! </p>
        <NavBar/>
      </Jumbotron>

    );
  }
}

export default JumboQuote;
