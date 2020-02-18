import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";

import "./app.css";

class App extends Component {
  state = {
    planetId: 2
  };

  constructor(props) {
    super(props);
    this.state = {
      planetId: 2
    };
  }

  onPlanetDetails = planetId => {
    this.setState({
      planetId
    });
  };

  render() {
    const { planetId } = this.state;

    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onDetails={this.onPlanetDetails} />
          </div>
          <div className="col-md-6">
            <PlanetDetails id={planetId} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
