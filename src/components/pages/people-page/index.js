import React, {Component} from "react";
import Row from "../../row";
import { PeopleList, PeoplesDetails } from "../../sw-components";
import { withRouter } from "react-router-dom"

class PeoplePage extends Component {

  render() {
    const {match, history} = this.props;
    const idMatch = match.params.id;

    return <Row
      left = {
        <PeopleList onDetails = { (id) => {
          history.push(`/people/${id}`)
        }}/>
      }
      right = {<PeoplesDetails id={idMatch} />}/>
  }
}

export default withRouter(PeoplePage);