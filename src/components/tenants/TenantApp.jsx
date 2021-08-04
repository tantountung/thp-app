
import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import TenantTable from "./TenantTable";
import TenantDetails from "./TenantDetails";
import TenantCreate from "./TenantCreate";

import "../css/App.css";

class App extends Component {
  state = {
    detailsTenant: null,
    createTenant: false,
    tenantList: [],
  };

  findTenant = (id) => {
    const tenants = this.state.tenantList;
    let foundTenant = null;
    tenants.forEach((element) => {
      if (element.id === id) {
        foundTenant = element;
      }
    });
    return foundTenant;
  };

  showTenant = (id) => {
    const tenant = this.findTenant(id);
    if (tenant != null) {
      this.setState({
        detailsTenant: tenant,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsTenant: null,
    });
  };

  deleteTenant = (id) => {
    const tenant = this.findTenant(id);
    if (tenant != null) {
      const tenants = this.state.tenantList;
      tenants.splice(tenants.indexOf(tenant), 1);
      this.setState({
        tenantList: tenants,
        detailsTenant: null,
      });
    }
  };

  createTenant = () => {
    this.setState({
      createTenant: true,
    });
  };

  addTenant = (tenant) => {
    const tenantList = this.state.tenantList;
    const newId =
      tenantList.reduce((rowTenant, highest) => {
        if (rowTenant.id > highest.id) {
          return rowTenant.id;
        }
        return highest;
      }).id + 1; 
    tenant.id = newId;

    tenantList.push(tenant);

    this.setState({
      tenantList: tenantList,
      createTenant: false,
    });
  };

  closeCreate = () => {
    this.setState({
      createTenant: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsTenant != null ? (
        <TenantDetails
          tenant={this.state.detailsTenant}
          closeDetails={this.closeDetails}
          deleteTenant={this.deleteTenant}
        />
      ) : this.state.createTenant ? (
        <TenantCreate addTenant={this.addTenant} closeCreate={this.closeCreate} />
      ) : (
        <div>
          <button onClick={this.createTenant} className="btn btn-success">
            Add Tenant
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Tenant SPA</h3>
          <hr />
          <div className="row">
            <TenantTable tenants={this.state.tenantList} showTenant={this.showTenant} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
