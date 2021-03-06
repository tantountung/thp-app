import React from "react";

const ContractTable = (props) => {
  const rows = props.contracts.map((contract) => {
    return (
      <tr key={contract.id}>
        <td>{contract.roomInQuestion.roomNumber}</td>  
        <td>{contract.tenantInQuestion.tenantName}</td>  
        <td>{contract.roomPrice}</td>
        {/* <td>{contract.paymentDate}</td>   
        <td>{contract.startDate}</td>  
        <td>{contract.endDate}</td>   */}
           
        <td
          className="btn btn-info"
          onClick={() => {
            props.showContract(contract.id);
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
            <th>Room In Question</th> 
            <th>Tenant In Question</th>                     
            <th>Room Price</th>
            {/* <th>Payment Date</th> 
            <th>Start Date</th> 
            <th>End Date</th>  */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ContractTable;