import React, { Component } from "react";

import Header from "../header";
import Row from "../row";
import Record from "../record"
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import "./app.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 11
    };
    this.swapiService = new SwapiService();
  }

  onSelectedItems = id => {
    this.setState({
      id
    });
  };

  render() {
    const { id } = this.state;
    const itemList = (
        <ItemList
          getData = {this.swapiService.getAllStarship() }
          onDetails = {this.onSelectedItems}
          renderItem = {item => `${item.name} | ${item.model}`} />
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails
          id={id}
          getData = {this.swapiService.getStarship(id)}
          getUrl = {this.swapiService.getUrlStarship(id)}>
          <Record label='Model' field='model'/>
          <Record label='Length' field='length'/>
          <Record label='Speed' field='speed'/>
        </ItemDetails>
      </ErrorBoundry>
    );

    return (
      <div>
        <Header />
        <RandomPlanet />
        <Row left = {itemList} right = {itemDetails}/>
      </div>
    );
  }
}

export default App;
