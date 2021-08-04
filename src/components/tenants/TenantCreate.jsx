import React, { Component } from "react";


class TenantCreate extends Component {
  createTenant = (event) => {
    event.preventDefault();

    const tenant = {
      id: 0,     
      tenantName: event.target["tenantName"].value,   
      tenantPhone: Number(event.target["tenantPhone"].value),      
      tenantDocument: event.target["tenantDocument"].value,
    };

    this.props.addTenant(tenant);
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add Tenant</h3>
        </div>

        <form onSubmit={this.createTenant}>
          
        <div className="row mb-2">
            <label htmlFor="tenantName" className="col-2 mt-2">
            Tenant Name:
            </label>
            <input
              id="tenantType" 
              type="text"             
              className="form-control col-10"
              placeholder="Enter Tenant Name"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="tenantPhone" className="col-2 mt-2">
            Tenant Phone:
            </label>
            <input
              id="tenantPhone"
              type="number"
              required              
              className="form-control col-10"
              placeholder="Enter Tenant Phone"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="tenantDocument" className="col-2 mt-2">
            Tenant Document:
            </label>
            <input
              id="tenantDocument" 
              type="text"             
              className="form-control col-10"
              placeholder="Enter Tenant Document"
            />
          </div>
          
          <div className="row d-flex justify-content-center">
            <input
              type="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input type="submit" className=" btn btn-success" value="Create" />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={this.props.closeCreate}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default TenantCreate;
