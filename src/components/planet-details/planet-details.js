import React, { Component } from "react";
import "./planet-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PlanetDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: {},
      loading: true,
      error: null,
      id: 2
    };
    this.swapiService = new SwapiService();
  }

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet() {
    const { id } = this.props;
    this.swapiService
      .getPlanet(id)
      .then(res => this.onPlanetLoaded(res))
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) this.updatePlanet();
  }

  render() {
    const { planet, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? (
      <PlanetDetailsView planet={planet} />
    ) : (
      <Error error={error} />
    );

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
      </div>
    );
  }
}
const Error = ({ error }) => {
  return <div className="person-details card">{error}</div>;
};

const PlanetDetailsView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <div className="person-details card">
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
