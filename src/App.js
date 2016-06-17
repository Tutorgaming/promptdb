/*
  Name : React Playground
  Entry point for Frontend Goes here
  By : Theppasith N.
*/

import React            from "react";
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';
import { render }       from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from "react-router";
import { syncHistoryWithStore, routerReducer }      from 'react-router-redux'


//React Bootstrap Components
import { Col } from 'react-bootstrap';

//Routes Component
import DisplayAll from "./components/DisplayAll";
import DisplayRegisForm from "./components/DisplayRegisForm";
import WelcomePage from "./components/WelcomePage";
import DisplayFacebookLogin from "./components/DisplayFacebookLogin";

//Redux Setup
  // Import Constants
  import * as ENUM from "./redux/constants";
  // Create Store
  import * as store from "./redux/store";

  // Create an enhanced history that syncs navigation events with the store
  const history = syncHistoryWithStore(browserHistory, store)

// Main Page Rendering
render(
  <Provider store={store}>
  <Router history={history}>
      <Route path="/" component={WelcomePage}/>
      <Route path="/facebookLogin" component={DisplayFacebookLogin}/>
      <Route path="/register" component={DisplayRegisForm}/>
      <Route path="/displayAll" component={DisplayAll}/>
      <Route path="/displayEdit" component={WelcomePage}/>
      <Route path="/displayRoom" component={DisplayAll}>
          <Route path="/displayRoom/:roomId" component={DisplayAll}/>
      </Route>
  </Router>
</Provider>,
  document.getElementById('app')
);
