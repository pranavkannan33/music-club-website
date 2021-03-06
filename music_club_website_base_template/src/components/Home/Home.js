import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';
// import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="bg-Div">
        <Carousel>
          <div>
            <img src={require('./image/BobMarley.jpg')} />
            <p className="Ganja Ganja"> Bob Marley </p>
          </div>
          <div>
            <img src={require('./image/BobMarley2.jpg')} />
            <p className="Ganja Ganja"> Bob Marley </p>
          </div>
          <div>
            <img src={require('./image/Background.jpg')} />
            <p className="Ganja Ganja"> Bob Marley </p>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default Home;