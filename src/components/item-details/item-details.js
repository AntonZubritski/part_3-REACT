import React, { Component } from "react";
import "./item-details.css";
import Spinner from "../spinner";
import Error from "../error"
import ErrorButton from "../error-button";


class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      loading: true,
      error: false
    };
  }

  onDetailsLoaded = item => {
    this.setState({
      item,
      loading: false
    });
  };

  updateDetails() {
      this.props.getData
      .then(item => this.onDetailsLoaded(item))
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
  }

  componentDidMount() {
    this.updateDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) this.updateDetails();
  }

  render() {
    const { item, loading, error } = this.state;
    const { getUrl, children } = this.props;
    const spinner = loading && !error  ? <Spinner /> : null;
    const content = !loading ? <ItemDetailsView
      item={item}
      getUrl={getUrl}
      children={children} /> : null;
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

// почему мы передаем item а не id в getUrl

const ItemDetailsView = ({ item, getUrl, children }) => {
  const {name, model, length, speed } = item;
  return (
    <div className="person-details card">
      <img
        className="person-image"
        src={getUrl}
        alt={`picStarship`}
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {/*<li className="list-group-item">
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
          </li>*/}
          {React.Children.map(children, child => {
            return React.cloneElement(child, { item });
          })}
          <ErrorButton />
        </ul>
      </div>
    </div>
  );
};

const starshipDetails = (Comp) => {
  return class extends Component {
    componentDidMount() {
      console.log(this.props);
    }
    render() {
      return <Comp {...this.props}/>
    }
  }
};
export default starshipDetails(ItemDetails);
// export default ItemDetails