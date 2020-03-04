import React, { Component } from "react";
import Header from "../header";
import Row from "../row";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../context"
import {
  StarshipList,
  PlanetList,
  PeopleList,
  StarshipsDetails,
  PlanetsDetails,
  PeoplesDetails,
  RandomItems
} from "../sw-components";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 11
    };
   this.swapiService =  new SwapiService();
  }


  onSelectedItems = id => {
    this.setState({ id });
  };

  render() {
    const { id } = this.state;

    const starshipList = (<StarshipList onDetails = {this.onSelectedItems}/>);
    const planetList = (<PlanetList onDetails = {this.onSelectedItems}/>);
    const peopleList = (<PeopleList onDetails = {this.onSelectedItems}/>);

    const starshipDetails = <StarshipsDetails id={id}/>;
    const planetDetails = <PlanetsDetails id={id}/>;
    const peopleDetails = <PeoplesDetails id={id}/>;


    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div>
          <Header />
          <RandomItems />
          <Row left = {starshipList} right = {starshipDetails}/>
        </div>
      </SwapiServiceProvider>
    );
  }
}

export default App;
