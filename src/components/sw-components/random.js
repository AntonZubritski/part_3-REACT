import React from "react";
import RandomPlanet from "../random-planet";
import Record from "../record"
import SwapiService from "../../services/swapi-service";
import { withDataRandom } from "../hocs";
import ErrorBoundry from "../error-boundry";

const  { getPlanet, getUrlPlanet } = new SwapiService();

const RandomItems = () => (
  <ErrorBoundry>
    <RandomPlanets
      getUrl = {getUrlPlanet}>
      <Record label='Population' field='population'/>
      <Record label='RotationPeriod' field='rotationPeriod'/>
      <Record label='Diameter' field='diameter'/>
    </RandomPlanets>
  </ErrorBoundry>
);

const RandomPlanets = withDataRandom(RandomPlanet, getPlanet);

export { RandomItems }


