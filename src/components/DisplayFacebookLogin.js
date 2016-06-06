/*
  Name : promptDB
  Facebook Login Page
  By : Theppasith N.
*/

//TODO : Set the Size of Facebook Login Button to calc(-0.65565vw + 32.38843px) calc(3.34435vw + 18.38843px)

'use strict';

import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Footer from './Footer'
import {Panel} from 'react-bootstrap'
import Header from './Header'

class DisplayFacebookLogin extends React.Component {
  constructor(props) {
      super(props);
  }

  responseFacebook(response){
      console.log(response)
  }

  render() {
    return (
      <div>
        <Header logged_in={false}/>
          <center>
            <div className="container">
              <Panel bsStyle="primary" header="Login With Facebook / กรุณา Login ด้วย Facebook ">
                  <FacebookLogin
                    appId="1121025771269670"
                    size="metro"
                    scope={"public_profile","email"}
                    autoLoad={true}
                    callback={this.responseFacebook.bind(this)}/>
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
