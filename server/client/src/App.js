import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Fitness from './components/Fitness';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/fitness">Fitness</Link>
        </nav>
        <Switch>
          <Route exact path = "/" component={Home} />
          <Route path = "/fitness" component={Fitness} />
        </Switch>
      </div>
    );
  }
}

export default App;
