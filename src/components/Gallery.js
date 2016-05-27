import React, {PropTypes} from 'react';
import {Carousel} from "react-bootstrap";
export default class Gallery extends React.Component {
  render() {
    return (
    <div>
      <h1 className="overlayTitleText">Prompt51 Alumni Database</h1>
      <Carousel>
            <Carousel.Item>
              <img src="./img/mont1.jpg"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img  src="./img/mont2.jpg"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img  src="./img/mont3.jpg"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img  src="./img/mont4.jpg"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    </div>
  );
  }
}
