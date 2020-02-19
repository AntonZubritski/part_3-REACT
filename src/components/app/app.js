import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import StarshipDetails from "../starship-details";

import "./app.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 11
    };
  }

  onSelectedItems = id => {
    this.setState({
      id
    });
  };

  render() {
    const { id } = this.state;
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onDetails={this.onSelectedItems} />
          </div>
          <div className="col-md-6">
            <StarshipDetails id={id} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
