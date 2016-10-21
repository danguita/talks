import React, { Component } from 'react';

class PlanetItem extends Component {
  render() {
    return (
      <div className="PlanetItem">
        <div className="PlanetItem-header">
          <h2>{this.props.planet.name}</h2>
        </div>
        <div className="PlanetItem-body">
          <p>Rotation period: {this.props.planet.rotation_period}</p>
          <p>Orbital period: {this.props.planet.orbital_period}</p>
        </div>
      </div>
    );
  }
}

export default PlanetItem;
