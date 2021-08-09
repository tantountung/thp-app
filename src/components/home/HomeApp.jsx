
import React, { Component } from "react";
import Footer from "../Footer";
import "../../css/App.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RoomApp from "../rooms/RoomApp";
import TenantApp from "../tenants/TenantApp";
import HousekeeperApp from "../housekeepers/HousekeeperApp";
import ContractApp from "../contracts/ContractApp"; 

class HomeApp  extends Component  {
    render() {
      return (
<div >
  
{/* <Header />

        <h1>WELCOME TO HOLLYWOOD ON ICE</h1> */}
        
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
                <h1>Welcome to Hollywood on Ice</h1>
              </Route>
            </Switch>
          </div>
        </Router>

        <Footer />

</div>
        
  
    );
    };
  
};

export default HomeApp;
