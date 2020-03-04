import React, {Component} from "react";
import { PlanetsDetails } from "../../sw-components";
import { withRouter } from "react-router-dom"

class PlanetDetailsPage extends Component {

  render() {
    const { match } = this.props;
    const id = match.params.id;
    return <PlanetsDetails id={id}/>
  }
}

export default withRouter(PlanetDetailsPage);