import React, { Component } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
// import styled, { css } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.min.js';

class Header extends Component {
  render() {
    return (
      <div>
        <h2 className="headline">header </h2>
        <Container className="carousel-header">
          <Carousel>
            <Carousel.Item>
              <Image className="slides" src="images/slide1.jpg" alt="slide 1" />
            </Carousel.Item>

            <Carousel.Item>
              <Image className="slides" src="images/slide2.jpg" alt="slide 2" />
              <Carousel.Caption>
                <h3>
                  Diverse Staff with the ability to deliver superior Solutions
                  as a team
                </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                className="slides"
                src="/images/slide3.jpg"
                alt="slide 3"
              />
              <Carousel.Caption>
                <h3>
                  Our recruitment process focuses on Technology that provides us
                  with a unique advantage to offer best value add to concerns
                  pertaining to all the technologies attached.
                </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                className="slides"
                src="/images/slide4.jpg"
                alt="slide 4"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default Header;
