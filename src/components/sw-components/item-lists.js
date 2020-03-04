import React from "react";
import ItemList from "../item-list";
import SwapiService from "../../services/swapi-service";
import { withDataList, withChildFunction } from "../hocs";


const  { getAllStarship, getAllPlanet, getAllPeople }  = new SwapiService();

const renderNameGender = (item) => `${item.name} | ${item.gender}`;
const renderName = (item) => `${item.name}`;


const StarshipList = withDataList(
  withChildFunction(ItemList, renderName),
  getAllStarship);

const PlanetList = withDataList(
  withChildFunction(ItemList, renderName),
  getAllPlanet);

const PeopleList = withDataList(
  withChildFunction(ItemList, renderNameGender),
  getAllPeople);


export {
  StarshipList,
  PeopleList,
  PlanetList
}

