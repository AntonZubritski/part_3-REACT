import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button"
import ErrorIndicator from "../error-indicator"


export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      loading: true
    };
    this.swapiService = new SwapiService();
  }

  onItemLoaded = items => {
    this.setState({
      items,
      loading: false,
      error: false,
    });
  };

  updateItems() {
    this.swapiService.getAllStarship().then(res => {
      this.onItemLoaded(res);
    });
  }

  componentDidMount() {
    this.updateItems();
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true
    })
  }

  render() {
    const { items, loading } = this.state;
    const { onDetails } = this.props;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? items.map(item => {
          const { id, name } = item;
          return (
            <li
              key={name}
              onClick={() => onDetails(id)}
              className="list-group-item">
              {name}
            </li>);
        })
      : null;
    if (this.state.error){
      return <ErrorIndicator />
    }

    return (
      <ul className="item-list list-group">
        <ErrorButton />
        {spinner}
        {content}
      </ul>
    );
  }
}
