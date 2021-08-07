
import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ContractTable from "./ContractTable";
import ContractDetails from "./ContractDetails";
import ContractCreate from "./ContractCreate";

import "../../css/App.css";

class ContractApp extends Component {
  state = {
    detailsContract: null,
    createContract: false,
    contractList: [],
  };

  findContract = (id) => {
    const contracts = this.state.contractList;
    let foundContract = null;
    contracts.forEach((element) => {
      if (element.id === id) {
        foundContract = element;
      }
    });
    return foundContract;
  };

  showContract = (id) => {
    const contract = this.findContract(id);
    if (contract != null) {
      this.setState({
        detailsContract: contract,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsContract: null,
    });
  };

  deleteContract = (id) => {
    const contract = this.findContract(id);
    if (contract != null) {
      const contracts = this.state.contractList;
      contracts.splice(contracts.indexOf(contract), 1);
      this.setState({
        contractList: contracts,
        detailsContract: null,
      });
    }
  };

  createContract = () => {
    this.setState({
      createContract: true,
    });
  };

  addContract = (contract) => {
    const contractList = this.state.contractList;
    const newId =
      contractList.reduce((rowContract, highest) => {
        if (rowContract.id > highest.id) {
          return rowContract.id;
        }
        return highest;
      }).id + 1; 
    contract.id = newId;

    contractList.push(contract);

    this.setState({
      contractList: contractList,
      createContract: false,
    });
  };

  closeCreate = () => {
    this.setState({
      createContract: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsContract != null ? (
        <ContractDetails
          contract={this.state.detailsContract}
          closeDetails={this.closeDetails}
          deleteContract={this.deleteContract}
        />
      ) : this.state.createContract ? (
        <ContractCreate addContract={this.addContract} closeCreate={this.closeCreate} />
      ) : (
        <div>
          <button onClick={this.createContract} className="btn btn-success">
            Add Contract
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Contract SPA</h3>
          <hr />
          <div className="row">
            <ContractTable contracts={this.state.contractList} showContract={this.showContract} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ContractApp;
