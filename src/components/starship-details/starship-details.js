import React, { Component } from "react";
import "./starship-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import Error from "../error"


export default class StarshipDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starship: {},
      loading: true,
      error: false
    };
    this.swapiService = new SwapiService();
  }

  onStarshipLoaded = starship => {
    this.setState({
      starship,
      loading: false
    });
  };

  updateStarship() {
    const { id } = this.props;
    this.swapiService
      .getStarship(id)
      .then(res => this.onStarshipLoaded(res))
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  componentDidMount() {
    this.updateStarship();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) this.updateStarship();
  }

  render() {
    const { starship, loading, error } = this.state;
    const spinner = loading && !error  ? <Spinner /> : null;
    const content = !loading ? <StarshipDetailsView starship={starship} /> : null;
    const errors = loading && error ? <Error error={error} /> : null;

    return (

      <div className="random-planet jumbotron rounded">
        {errors}
        {spinner}
        {content}
      </div>
    );
  }
}

const StarshipDetailsView = ({ starship }) => {
  const { id, name, model, length, speed } = starship;

  return (

    <div className="person-details card">
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        alt={`picStarship`}
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Model</span>
            <span>{model}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Length</span>
            <span>{length}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Speed</span>
            <span>{speed}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
