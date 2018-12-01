import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Resume from './Resume.js';
import Contact from './Contact.js';
import { Grid, Row, Col } from 'react-bootstrap';
import { StickyContainer, Sticky } from 'react-sticky';


class App extends Component {
  render() {
    return (
      <div className="App">
        <StickyContainer>
          {/* <Sticky> */}
            <Nav />
          {/* </Sticky> */}
        </StickyContainer>
        <Home />
        <Projects />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App;
