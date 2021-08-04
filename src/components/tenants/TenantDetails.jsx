import React from "react";

const TenantDetails = (props) => {
  return (
    <div className="col-md-6">
      <ul className="list-group">       
         
        <li className="list-group-item">
          <b>Tenant Name:</b>
          <p>{props.tenant.tenantName}</p>
        </li>
       
        <li className="list-group-item">
          <b>Tenant Phone:</b>
          <p>{props.tenant.tenantPhone}</p>
        </li>

        <li className="list-group-item">
          <b>Tenant Document:</b>
          <p>{props.tenant.tenantDocument}</p>
        </li>
        
        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteTenant(props.tenant.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TenantDetails;