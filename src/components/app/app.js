import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {SwapiServiceProvider} from "../context"
import Header from "../header";
import SwapiService from "../../services/swapi-service";
import { RandomItems } from "../sw-components";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import "./app.css";
import PlanetDetailsPage from "../pages/planet-details-page";

class App extends Component{
    state = {
      swapiService: new SwapiService(),
    };

      render() {
        const { swapiService } = this.state;
        return (
          <SwapiServiceProvider value={swapiService}>
            <div className={'white-text'}>
              <Router>
                <Header />
                <RandomItems />
                <Switch>
                  <Route path="/" render={() => <h1>Welcome!</h1>} exact />
                  <Route path="/people/:id?" component ={PeoplePage} exact />
                  <Route path="/planets" component ={PlanetPage} exact />
                  <Route path="/planets/:id" component ={PlanetDetailsPage}/>
                  <Route path="/starships/:id?" component ={StarshipPage} exact/>
                  <Route render={()=> <h1>Ээээй, не надо так...</h1>}/>
                </Switch>
              </Router>
            </div>
          </SwapiServiceProvider>
        );
      }
  }

export default App;
