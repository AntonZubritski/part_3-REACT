import React, { Component } from "react";

import "./item-list.css";
import Spinner from "../spinner";


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      loading: true
    };
  }

  onItemLoaded = items => {
    this.setState({
      items,
      loading: false,
    });
  };

  updateItems() {
    this.props.getData
      .then(res => {
      this.onItemLoaded(res);
    });
  }

  componentDidMount() {
    this.updateItems();
  }

  render() {
    const { items, loading } = this.state;
    const { onDetails } = this.props;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? items.map((item, key) => {
          const { id } = item;
          const { renderItem } = this.props;
          if (key < 6){
          return (
            <li
              key={id}
              onClick={() => onDetails(id)}
              className="list-group-item">
              {renderItem(item)}
            </li>);
          }
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

const starshipList = (Comp) => {
  return class extends Component {
    componentDidMount() {
      console.log(this.props);
    }
    render() {
      return <Comp { ...this.props } />
    }
  }
};

export default starshipList(ItemList);
// export default ItemList
