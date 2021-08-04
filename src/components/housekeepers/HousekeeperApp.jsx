
import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import HousekeeperTable from "./HousekeeperTable";
import HousekeeperDetails from "./HousekeeperDetails";
import HousekeeperCreate from "./HousekeeperCreate";

import "../css/App.css";

class App extends Component {
  state = {
    detailsHousekeeper: null,
    createHousekeeper: false,
    housekeeperList: [],
  };

  findHousekeeper = (id) => {
    const housekeepers = this.state.housekeeperList;
    let foundHousekeeper = null;
    housekeepers.forEach((element) => {
      if (element.id === id) {
        foundHousekeeper = element;
      }
    });
    return foundHousekeeper;
  };

  showHousekeeper = (id) => {
    const housekeeper = this.findHousekeeper(id);
    if (housekeeper != null) {
      this.setState({
        detailsHousekeeper: housekeeper,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsHousekeeper: null,
    });
  };

  deleteHousekeeper = (id) => {
    const housekeeper = this.findHousekeeper(id);
    if (housekeeper != null) {
      const housekeepers = this.state.housekeeperList;
      housekeepers.splice(housekeepers.indexOf(housekeeper), 1);
      this.setState({
        housekeeperList: housekeepers,
        detailsHousekeeper: null,
      });
    }
  };

  createHousekeeper = () => {
    this.setState({
      createHousekeeper: true,
    });
  };

  addHousekeeper = (housekeeper) => {
    const housekeeperList = this.state.housekeeperList;
    const newId =
      housekeeperList.reduce((rowHousekeeper, highest) => {
        if (rowHousekeeper.id > highest.id) {
          return rowHousekeeper.id;
        }
        return highest;
      }).id + 1; 
    housekeeper.id = newId;

    housekeeperList.push(housekeeper);

    this.setState({
      housekeeperList: housekeeperList,
      createHousekeeper: false,
    });
  };

  closeCreate = () => {
    this.setState({
      createHousekeeper: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsHousekeeper != null ? (
        <HousekeeperDetails
          housekeeper={this.state.detailsHousekeeper}
          closeDetails={this.closeDetails}
          deleteHousekeeper={this.deleteHousekeeper}
        />
      ) : this.state.createHousekeeper ? (
        <HousekeeperCreate addHousekeeper={this.addHousekeeper} closeCreate={this.closeCreate} />
      ) : (
        <div>
          <button onClick={this.createHousekeeper} className="btn btn-success">
            Add Housekeeper
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Housekeeper SPA</h3>
          <hr />
          <div className="row">
            <HousekeeperTable housekeepers={this.state.housekeeperList} showHousekeeper={this.showHousekeeper} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
