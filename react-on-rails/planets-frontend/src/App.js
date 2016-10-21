import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PlanetList from './PlanetList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Star Wars Planets Demo</h2>
        </div>
        <div className="App-body">
          <PlanetList/>
        </div>
      </div>
    );
  }
}

export default App;
