import React from "react";
import PropTypes from "prop-types";
import ItemDetails from "../item-details";
import Record from "../record"
import { withDataDetails, withService } from "../hocs";
import ErrorBoundry from "../error-boundry";


const starshipsDetails = ({id, swapiService}) => {
  const { getUrlStarship, getStarship } = swapiService;
  return (
    <ErrorBoundry>
      <HocDetails
        id={id}
        getUrl={getUrlStarship}
        getData={getStarship}>
        <Record label='Model' field='model'/>
        <Record label='Length' field='length'/>
        <Record label='Speed' field='speed'/>
      </HocDetails>
    </ErrorBoundry>
  )
};

const planetsDetails = ({id, swapiService}) => {
  const { getUrlPlanet, getPlanet } = swapiService;
  return (
    <ErrorBoundry>
      <HocDetails
        id={id}
        getUrl={getUrlPlanet}
        getData={getPlanet}>
        <Record label='Population' field='population'/>
        <Record label='RotationPeriod' field='rotationPeriod'/>
        <Record label='Diameter' field='diameter'/>
      </HocDetails>
    </ErrorBoundry>
  )
};

const peoplesDetails = ({id, swapiService}) => {
  const { getUrlPerson, getPerson } = swapiService;
  return (
    <ErrorBoundry>
      <HocDetails
        id={id}
        getUrl={getUrlPerson}
        getData={getPerson}>
        <Record label='Gender' field='gender'/>
        <Record label='BirthYear' field='birthYear'/>
        <Record label='EyeColor' field='eyeColor'/>
      </HocDetails>
    </ErrorBoundry>
  )
};

const StarshipsDetails = withService(starshipsDetails);
const PlanetsDetails = withService(planetsDetails);
const PeoplesDetails = withService(peoplesDetails);
const HocDetails = withDataDetails(ItemDetails);

export {
  StarshipsDetails,
  PeoplesDetails,
  PlanetsDetails
}

HocDetails.defaultProps = {
  id: 12
};
// HocDetails.propTypes = {
//   id: PropTypes.number
// };

// peoplesDetails.propTypes = {
//   id: (props, id, componentName) => {
//     if (typeof props[id] === 'number'){
//       return null
//     }
//     return new TypeError(`${componentName} - ${id} must be number`)
//   }
// };

// peoplesDetails.propTypes = {
//   id: Number
// };
