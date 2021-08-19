
import React, { Component } from "react";
import ContractTable from "./ContractTable";
import ContractDetails from "./ContractDetails";
import ContractCreate from "./ContractCreate";
import getContracts, { getContractById,  createContract, deleteContract,
getRooms, getTenants } from "../api/contractsApi";

import "../../css/App.css";

class ContractApp extends Component {
  state = {
    detailsContract: null,
    createContract: false,
    contractList: [],
    roomList: [],
    tenantList: []
  };

  componentDidMount() {
    const _this = this;
    getContracts().then((contracts) => {
      _this.setState({ contractList: contracts });
    });

    getRooms().then((rooms) => {
      _this.setState({ roomList: rooms });
    });

    getTenants().then((tenants) => {
      _this.setState({ tenantList: tenants });
    });


  }

  findContract = async (id) => {
       return await getContractById(id);
  };

  showContract = async (id) => {
    const contract = await this.findContract(id);
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

  deleteContractHandler = (id) => {
    const contract = this.findContract(id);
    if (contract != null) {
      if (deleteContract(id)) {
        const contracts = this.state.contractList;
        contracts.forEach((element) => {
          if (element.id === id) {
            contracts.pop(element);
          }
        });

        this.setState({
          contractList: contracts,
          detailsContract: null,
        });
      }
    }
  };

  showCreateContract = () => {
    this.setState({
      createContract: true,
    });
  };

  addContract = async (contract) => {
    const contractList = this.state.contractList;
    
    contract = await createContract(contract);

    if (contract !== undefined) {
      contractList.push(contract);
    }

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
          deleteContract={this.deleteContractHandler}
        />
      ) : this.state.createContract ? (
        <ContractCreate addContract={this.addContract} 
        closeCreate={this.closeCreate}
        roomArray= {this.state.roomList}
        tenantArray= {this.state.tenantList}
         />
      ) : (
        <div className="col-md-6">
          <button onClick={this.showCreateContract} className="btn btn-success">
            Add Contract
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <React.Fragment>
        
        <div className="container stay-clear">
          <h3>Contract SPA</h3>
          <hr />
          <div className="row">
            <ContractTable contracts={this.state.contractList} 
            showContract={this.showContract} />
            {sideElement}
          </div>
        </div>

             </React.Fragment>
    );
  }
}

export default ContractApp;