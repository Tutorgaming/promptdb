/*
  Name : promptDB
  Facebook Login Page
  By : Theppasith N.
*/
import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Footer from './Footer'
import {Panel} from 'react-bootstrap'
import Header from './Header'

class DisplayFacebookLogin extends React.Component {
  constructor(props) {
      super(props);
      // Bind To Non-React Object
      this.responseFacebook = this.responseFacebook.bind(this);
      this.handleAuthStatus = this.handleAuthStatus.bind(this);
      // Init the facebook API
      this.initialFacebookSDK();
      this.state = {
        logged_in: false,
        user:{
          fbusername: '',
          picurl: '',
          fbid: ''
        }
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

        // Fetch user Data
        FB.api('/me', function(response) {
          fbusername = response.name;
          fbid = response.id;
          picurl = "http://graph.facebook.com/" + fbid + "/picture?type=square";
          this.setState({
            logged_in :true,
            user:{
              'fbusername': fbusername,
              'fbid': fbid,
              'picurl': ""+picurl
            }
          });
        }.bind(this));
      }
      else {
      }
  }


  render() {

    var profile;
    if(this.state.logged_in){
      profile = this.state.user;
    }
    return (
      <div>
        <Header logged_in={false}/>
          <center>
            <div className="container">
              <Panel bsStyle="primary" header="Login With Facebook / กรุณา Login ด้วย Facebook ">
                  {(this.state.logged_in)? <div><img src={profile.picurl}/> <br/> {profile.fbusername}</div>
                :
                <FacebookLogin
                  appId="1121025771269670"
                  size="metro"
                  scope={"public_profile","email"}
                  autoLoad={false}
                  callback={this.responseFacebook}/>
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

//
// import React from "react";
// import FacebookLogin from 'react-facebook-login';
//
// class DisplayFacebookLogin extends React.Component {
//   constructor(props) {
//       super(props)
//   };
//
//   // Tip: Usage of Arrow Function in order to get to the Scope This
//   var facebookResponseCallback = (response) => {
//     console.log(response);
//   };
//
//   render(){
//     return(
//       <FacebookLogin
//             appId="1121025771269670"
//             size={medium}
//             autoLoad={true}
//             callback={facebookResponseCallback}
//         />
//     );
//   }
// }
//
// export default DisplayFacebookLogin;
