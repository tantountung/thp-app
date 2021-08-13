
import React, { Component } from "react";
import HousekeeperTable from "./HousekeeperTable";
import HousekeeperDetails from "./HousekeeperDetails";
import HousekeeperCreate from "./HousekeeperCreate";
import getHousekeepers, { getHousekeeperById,  createHousekeeper, deleteHousekeeper } from "../api/housekeepersApi";

import "../../css/App.css";

class HousekeeperApp extends Component {
  state = {
    detailsHousekeeper: null,
    createHousekeeper: false,
    housekeeperList: [],
  };

  componentDidMount() {
    const _this = this;
    getHousekeepers().then((housekeepers) => {
      _this.setState({ housekeeperList: housekeepers });
    });
  }

  findHousekeeper = async (id) => {
       return await getHousekeeperById(id);
  };

  showHousekeeper = async (id) => {
    const housekeeper = await this.findHousekeeper(id);
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

  deleteHousekeeperHandler = (id) => {
    const housekeeper = this.findHousekeeper(id);
    if (housekeeper != null) {
      if (deleteHousekeeper(id)) {
        const housekeepers = this.state.housekeeperList;
        housekeepers.forEach((element) => {
          if (element.id === id) {
            housekeepers.pop(element);
          }
        });

        this.setState({
          housekeeperList: housekeepers,
          detailsHousekeeper: null,
        });
      }
    }
  };

  showCreateHousekeeper = () => {
    this.setState({
      createHousekeeper: true,
    });
  };

  addHousekeeper = async (housekeeper) => {
    const housekeeperList = this.state.housekeeperList;
    
    housekeeper = await createHousekeeper(housekeeper);

    if (housekeeper !== undefined) {
      housekeeperList.push(housekeeper);
    }

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
          deleteHousekeeper={this.deleteHousekeeperHandler}
        />
      ) : this.state.createHousekeeper ? (
        <HousekeeperCreate addHousekeeper={this.addHousekeeper} closeCreate={this.closeCreate} />
      ) : (
        <div className="col-md-6">
          <button onClick={this.showCreateHousekeeper} className="btn btn-success">
            Add Housekeeper
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <React.Fragment>
        
        <div className="container stay-clear">
          <h3>Housekeeper SPA</h3>
          <hr />
          <div className="row">
            <HousekeeperTable housekeepers={this.state.housekeeperList} showHousekeeper={this.showHousekeeper} />
            {sideElement}
          </div>
        </div>

             </React.Fragment>
    );
  }
}

export default HousekeeperApp;