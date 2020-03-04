import React, {Component} from "react";
import Row from "../../row";
import { PlanetList, PlanetsDetails } from "../../sw-components";
import { withRouter, Redirect } from "react-router-dom"

class PlanetPage extends Component {
  state = {
    isLoggedIn: true
  };

  render() {
    const { history } = this.props;

    if (!this.state.isLoggedIn) {
      return <Redirect to={''} />
    }
    return <Row
      left = {
        <PlanetList onDetails = {(id) => {
          history.push(`/planets/${id}`)
        }}/>
      }
    />
  }
}

export default withRouter(PlanetPage);