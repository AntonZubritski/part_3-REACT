import React, {Component} from "react";
import Row from "../../row";
import { StarshipList, StarshipsDetails } from "../../sw-components";
import { withRouter } from "react-router-dom"

class StarshipPage extends Component {


  render() {
    const {match, history} = this.props;
    const idMatch = match.params.id;

    return <Row
      left = {<StarshipList onDetails = {(id) => {
      history.push(`/starships/${id}`)}
      }/>}
      right = {<StarshipsDetails id={idMatch} />}/>
  }
}

export default withRouter(StarshipPage);