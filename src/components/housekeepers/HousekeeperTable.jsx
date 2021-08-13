import React from "react";

const HousekeeperTable = (props) => {
  const rows = props.housekeepers.map((housekeeper) => {
    return (
      <tr key={housekeeper.id}>
        <td>{housekeeper.housekeeperName}</td>
        {/* <td>{housekeeper.housekeeperPhone}</td>   
        <td>{housekeeper.housekeeperAddress}</td>  
        <td>{housekeeper.housekeeperBankNumber}</td>  
        <td>{housekeeper.housekeeperLeave}</td>   */}
        <td>{housekeeper.housekeeperSalary}</td>  
        <td>{housekeeper.housekeeperStartDate}</td>      
        <td>{housekeeper.housekeeperEndDate}</td>      
        <td
          className="btn btn-info"
          onClick={() => {
            props.showHousekeeper(housekeeper.id);
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
            <th>Housekeeper Name</th>
            {/* <th>Housekeeper Phone</th> 
            <th>Housekeeper Address</th> 
            <th>Housekeeper BankNumber</th> 
            <th>Housekeeper Leave</th>  */}
            <th>Housekeeper Salary</th> 
            <th>Housekeeper StartDate</th> 
            <th>Housekeeper EndDate</th>           
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default HousekeeperTable;