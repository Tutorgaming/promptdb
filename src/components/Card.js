import React from "react";
import {Button, Thumbnail,Col} from "react-bootstrap";
class Card extends React.Component {
  constructor(props) {
      super(props);
  }

  /*
    Schema for Single Member
    let member = {
      firstname : "",
      lastname : "",
      nickname : "",
      workAt : "",
      birthdate : "",
      phone_no : "",
      facebook_id : "", // To be solve to facebook url

    };

  */

  render(){
    return(
      <Col xs={6} md={4}>
        <Thumbnail src="http://www.placehold.it/242x200"  alt="242x200" style={{marginTop: 50 + 'px'}}>
          <center>
              <h3>{this.props.nickname}</h3>
              <h4>{this.props.firstname}aaaaaaa {this.props.lastname}bbbbbbbb</h4>

              </center>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}
export default Card;
