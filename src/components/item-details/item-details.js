import React, { Component } from "react";
import ErrorButton from "../error-button";
import "./item-details.css";


class ItemDetails extends Component {

  itemDetailsView = ( data, getUrl, children ) => {
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={getUrl(data)}
          alt={`picStarship`}
        />
        <div className="card-body">
          <h4>{this.props.data.name}</h4>
          <ul className="list-group list-group-flush">

            {React.Children.map(children, child => {
              return React.cloneElement(child, { data });
            })}

            <ErrorButton />
          </ul>
        </div>
      </div>
    );
  };

  render() {
    const {  data, getUrl, children } = this.props;
    const content = this.itemDetailsView( data, getUrl, children );

    return (
      <div className="random-planet jumbotron rounded">
        {content}
      </div>
    );
  }
}

export default ItemDetails