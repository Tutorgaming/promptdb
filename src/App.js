/*
  Name : React Playground
  Entry point for Frontend Goes here
  By : Theppasith N.
*/

import React from "react";
import {render} from 'react-dom';

import {Router, Route,browserHistory,IndexRoute} from "react-router"

//React Bootstrap Components
import { Col } from 'react-bootstrap';

//Routes Component
import DisplayAll from "./components/DisplayAll";
import DisplayRegisForm from "./components/DisplayRegisForm";
import WelcomePage from "./components/WelcomePage";

// Main Page Rendering
render(
  <Router history={browserHistory}>
      <Route path="/" component={WelcomePage}/>
      <Route path="/register" component={DisplayRegisForm}/>
      <Route path="/displayAll" component={DisplayAll}/>
      <Route path="/displayRoom" component={DisplayAll}>
          <Route path="/displayRoom/:roomId" component={DisplayAll}/>
      </Route>
  </Router>,
  document.getElementById('app')
);
