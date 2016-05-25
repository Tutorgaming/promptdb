/*
  Name : promptDB
  Cardview goes here
  By : Theppasith N.
*/
import React from "react";
import {Col,Row,Grid,Thumbnail,Button} from "react-bootstrap";
import Card from "./Card"


class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          cards : this.props.datas
    };
  }

  render(){
    return (
        <Grid>
            <Row>
            {//Iterate through All Sample Data
              this.state.cards.map(card =>{
                  return (<Card key = {card} firstname={card} lastname = {card} ></Card>);
              })
            }
            </Row>
        </Grid>
    );
  }
}

export default CardContainer;
