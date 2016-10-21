import React, { Component } from 'react';

import PlanetItem from './PlanetItem';

class PlanetList extends Component {
  constructor(props) {
    super(props);
    this.state = { planets: [] };
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  fetchPlanets() {
    fetch("http://swapi.co/api/planets/")
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        this.setState({ planets: json.results });
      }.bind(this));
  }

  render() {
    return (
      <div className="PlanetList">
        {this.state.planets.map(function(planet, index) {
          return (
            <PlanetItem key={index} planet={planet}/>
          )
        })}
      </div>
    );
  }
}

export default PlanetList;
