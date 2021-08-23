
import React, { Component } from "react";
import TenantTable from "./TenantTable";
import TenantDetails from "./TenantDetails";
import TenantCreate from "./TenantCreate";
import getTenants, { getTenantById,  createTenant, deleteTenant } from "../api/tenantsApi";

import "../../css/App.css";

class TenantApp extends Component {
  state = {
    detailsTenant: null,
    createTenant: false,
    tenantList: [],
  };

  componentDidMount() {
    const _this = this;
    getTenants().then((tenants) => {
      _this.setState({ tenantList: tenants });
    });
  }

  findTenant = async (tenantInQuestionId) => {
       return await getTenantById(tenantInQuestionId);
  };

  showTenant = async (tenantInQuestionId) => {
    const tenant = await this.findTenant(tenantInQuestionId);
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

  deleteTenantHandler = (tenantInQuestionId) => {
    const tenant = this.findTenant(tenantInQuestionId);
    if (tenant != null) {
      if (deleteTenant(tenantInQuestionId)) {
        const tenants = this.state.tenantList;
        tenants.forEach((element) => {
          if (element.tenantInQuestionId === tenantInQuestionId) {
            tenants.pop(element);
          }
        });

        this.setState({
          tenantList: tenants,
          detailsTenant: null,
        });
      }
    }
  };

  showCreateTenant = () => {
    this.setState({
      createTenant: true,
    });
  };

  addTenant = async (tenant) => {
    const tenantList = this.state.tenantList;
    
    tenant = await createTenant(tenant);

    if (tenant !== undefined) {
      tenantList.push(tenant);
    }

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
          deleteTenant={this.deleteTenantHandler}
        />
      ) : this.state.createTenant ? (
        <TenantCreate addTenant={this.addTenant} closeCreate={this.closeCreate} />
      ) : (
        <div className="col-md-6">
          <button onClick={this.showCreateTenant} className="btn btn-success">
            Add Tenant
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <React.Fragment>
        
        <div className="container stay-clear">
          <h3>Tenant SPA</h3>
          <hr />
          <div className="row">
            <TenantTable tenants={this.state.tenantList} showTenant={this.showTenant} />
            {sideElement}
          </div>
        </div>

             </React.Fragment>
    );
  }
}

export default TenantApp;