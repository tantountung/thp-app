import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomeApp from "../components/home/HomeApp";
import RoomApp from "../components/rooms/RoomApp";
import TenantApp from "../components/tenants/TenantApp";
import HousekeeperApp from "../components/housekeepers/HousekeeperApp";
import ContractApp from "../components/contracts/ContractApp"; 


class Header  extends Component  {
  render() {
    return (

    // <h1> Test to by pass router </h1>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link to="/tenants">Tenants</Link>
                </li>
                <li>
                  <Link to="/housekeepers">Housekeepers</Link>
                </li>
                <li>
                  <Link to="/contracts">Contracts</Link>
                </li>
              </ul>
            </nav>
    
            <Switch>
           
              <Route path="/rooms">
                <RoomApp />
              </Route>
              <Route path="/tenants">
                <TenantApp />
              </Route>
              <Route path="/housekeepers">
                <HousekeeperApp />
              </Route>
              <Route path="/contracts">
                <ContractApp />
              </Route>
              <Route path="/">
                <HomeApp />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    };
  
}

export default Header;
