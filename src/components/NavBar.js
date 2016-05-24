/*
  Name : React Playground
  Navigation Bar Components Goes Here
  By : Theppasith N.
*/

import React from "react";
import { Button, Panel } from 'react-bootstrap';
// Main App
class NavBar extends React.Component {
  // Rendering Method
  render() {
    return (
        <Panel>
          <div className = "HeaderBar" >
            <span>
              <Button bsStyle="primary">Button 1</Button>
            </span>
            &nbsp;&nbsp;&nbsp;
            <span>
              <Button bsStyle="primary">Button 2</Button>
            </span>
            &nbsp;&nbsp;&nbsp;
          </div>
        </Panel>
    );
  }
}

export default NavBar;
