import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Fitness from './components/Fitness';
import Reviews from './components/Reviews';
import SimpleMap from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/locations">Fitness</Link>{" "}
          <Link to="/reviews">Reviews</Link>{" "}
          <Link to="/map">Map</Link>
        </nav>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path = "/locations" component={Fitness} />
          <Route path = "/reviews" component={Reviews} />
          <Route path = "/map" component={SimpleMap} />
        </Switch>
      </div>
    );
  }
}

export default App;
