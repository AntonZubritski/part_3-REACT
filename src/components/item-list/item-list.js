import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: {},
      loading: true
    };
    this.swapiService = new SwapiService();
  }

  onPlanetLoaded = planets => {
    this.setState({
      planets,
      loading: false
    });
  };

  updatePlanet() {
    this.swapiService.getAllPlanet().then(res => {
      this.onPlanetLoaded(res);
    });
  }

  componentDidMount() {
    this.updatePlanet();
  }

  render() {
    const { planets, loading } = this.state;
    const { onDetails } = this.props;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? planets.map(planet => {
          const { id, name } = planet;
          return (
            <li
              key={planet.name}
              onClick={() => onDetails(id)}
              className="list-group-item">
              {name}
            </li>
          );
        })
      : null;

    return (
      <ul className="item-list list-group">
        {spinner}
        {content}
      </ul>
    );
  }
}
