import React, { Component } from "react";
import "./random-planet.css";

class RandomPlanet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: {},
    };
  }

  planetView = ( data, getUrl, children ) => {
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={getUrl(data)}
          alt={`picStarship`}
        />
        <div>
          <h4>{this.props.data.name}</h4>
          <ul className="list-group list-group-flush">

            {React.Children.map(children, child => {
              return React.cloneElement(child, { data });
            })}

          </ul>
        </div>
      </div>
    );
  };

  render() {
    const { data, getUrl, children } = this.props;
    const content = this.planetView(data, getUrl, children);

    return (
      <div className="person-details jumbotron rounded">
        {content}
      </div>
    );
  }
}

export default RandomPlanet;
