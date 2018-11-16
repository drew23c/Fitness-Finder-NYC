import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Fitness from './components/Fitness';
import Reviews from './components/Reviews';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Find Your Gym</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem eventKey={2} href="/locations">
                Fitness
              </NavItem>
              <NavItem eventKey={3} href="/reviews">
                Reviews
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path = "/locations" component={Fitness} />
          <Route path = "/reviews" component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default App;
