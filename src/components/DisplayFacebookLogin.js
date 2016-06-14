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
      // Bind To Non-React Object
      this.responseFacebook = this.responseFacebook.bind(this);
      this.handleAuthStatus = this.handleAuthStatus.bind(this);
      // Init the facebook API
      this.initialFacebookSDK();

      // Maintained Login State (Test Purpose)
      this.state = {
        loca : false
      };
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

  responseFacebook(res){
      // Check Login
      FB.getLoginStatus(function(response) {
          this.handleAuthStatus(response);
        }.bind(this));
  }

  handleAuthStatus(response){
    if(response.status == "connected") {
        var parent = this;
        var fbusername;
        var fbid;
        var picurl;
        var largepic;
        console.log("res");
        console.log(response);
        // Fetch user Data
        FB.api('/me', function(response) {
          fbusername = response.name;
          fbid = response.id;
          picurl = "http://graph.facebook.com/" + fbid + "/picture?type=square";
          largepic = "http://graph.facebook.com/" + fbid + "/picture?type=large";
          this.setState({
            logged_in :true,
            user:{
              'fbusername': fbusername,
              'fbid': fbid,
              'picurl': ""+picurl,
              'largepic': ""+largepic
            }
          });
          // Do Something After We got the Auth Param
        }.bind(this));
      }
      else {
      }
  }

  doAuthen(){
      console.log("Do the Firebase Authentication");
      //this.props.attemptLogin();
      this.props.startListeningToAuth();

      // Router Push to Welcome Page (SHOULD HAVE THE DATA PROVIDED FROM HERE)
  }

  componentWillReceiveProps(){
    console.log("NEW PROP DETECT");
  }

  componentDidMount(){
    console.log("Component Did Mount");

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
                  {(this.props.auth.logged_in)? <div><img src={this.props.auth.largepic}/> <br/> {this.props.auth.fbusername}</div>
                :
                <FacebookLogin
                  appId="1121025771269670"
                  size="metro"
                  scope={"public_profile","email"}
                  autoLoad={false}
                  callback={this.responseFacebook}/>
              }

            <br/>
              <Button onClick={this.doAuthen.bind(this)} bsStyle="warning"> Login-Firebase </Button>
              </Panel>

              </div>
          </center>
          <Footer />
      </div>
    )
  }
}

export default DisplayFacebookLogin;

//Connect To Store to keep the Data Here


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
