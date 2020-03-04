import React, { Component } from "react";
import "./item-list.css";


class ItemList extends Component  {

  renderItems (arr) {
    const { onDetails } = this.props;

    return (
      arr.map((item, key) => {
        const { id } = item;
        if (key < 6){
          return (
            <li
              key={id}
              onClick={() => onDetails(id)}
              className="list-group-item">
              {this.props.children(item)}
            </li>);
        }
      })
    )};

  render() {
    const { data } = this.props;
    const content = this.renderItems(data);

    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    )
  }
}

export default ItemList;

