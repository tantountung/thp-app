import React from "react";

const TenantTable = (props) => {
  const rows = props.tenants.map((tenant) => {
    return (
      <tr key={tenant.tenantInQuestionId}>
        <td>{tenant.tenantName}</td>
        <td>{tenant.tenantPhone}</td>   
        <td>{tenant.tenantDocument}</td>      
        <td
          className="btn btn-info"
          onClick={() => {
            props.showTenant(tenant.tenantInQuestionId);
          }}>
          Details
        </td>
      </tr>
    );
  });

  return (
    <div className="col-md-6 middle-bar">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Tenant Name</th>
            <th>Tenant Phone</th> 
            <th>Tenant Document</th>           
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default TenantTable;