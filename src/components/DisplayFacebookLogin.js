/*
  Name : promptDB
  Facebook Login Page
  By : Theppasith N.
*/
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Footer from './Footer'
import {Panel, Button} from 'react-bootstrap'
import Header from './Header'
import * as authen_action from '../redux/actions/auth'
import {connect} from 'react-redux';

class DisplayFacebookLogin extends React.Component {
  constructor(props) {
      super(props);
      // Init the facebook API
      this.initialFacebookSDK();
  }

  initialFacebookSDK(){
    //From developer.facebook.com
      window.fbAsyncInit = function() {
        FB.init({
          appId      : 1121025771269670,
          cookie     : true,  // enable cookies to allow the server to access
                              // the session
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.5' // use graph api version 2.5
        });
      };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  }

  doAuthen(){
      console.log("Do the Firebase Authentication");
      //Emit the Auth Action
      this.props.startListeningToAuth();
  }

  render() {
    return (
      <div>
          {
          (this.props.auth.logged_in)?
          <Header logged_in={this.props.auth.logged_in} user={this.props.auth}/>
          :
          <Header logged_in={false}/>
          }

          <center>
            <div className="container">
              <Panel bsStyle="primary" header="Login With Facebook / กรุณา Login ด้วย Facebook ">
                  {(this.props.auth.logged_in)?
                    <div>
                        <img src={this.props.auth.largepic}/>
                        <br/> {this.props.auth.fbusername}
                    </div>
                  :
                  ""
                 }
                  <br/>

                {(!this.props.auth.logged_in)?
                  <Button onClick={this.doAuthen.bind(this)} bsStyle="primary">
                      Login with Facebook
                  </Button>
                  :
                  ""
                }
              </Panel>

              </div>
          </center>
          <Footer />
      </div>
    )
  }
}

export default DisplayFacebookLogin;

var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {
		attemptLogin: function(){ dispatch(authen_action.attemptLogin()); },
    startListeningToAuth: function() {dispatch(authen_action.startListeningToAuth());},
    sayHello: function(){ dispatch(authen_action.sayHello());},
		logoutUser: function(){ dispatch(authen_action.logoutUser()); }
	}
};

module.exports = connect(mapStateToProps,mapDispatchToProps)(DisplayFacebookLogin);
