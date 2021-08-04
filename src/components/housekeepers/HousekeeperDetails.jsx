import React from "react";

const HousekeeperDetails = (props) => {
  return (
    <div className="col-md-6">
      <ul className="list-group">       
         
        <li className="list-group-item">
          <b>Housekeeper Name:</b>
          <p>{props.housekeeper.housekeeperName}</p>
        </li>

        <li className="list-group-item">
          <b>Housekeeper Phone:</b>
          <p>{props.housekeeper.housekeeperPhone}</p>
        </li>       

        <li className="list-group-item">
          <b>Housekeeper Address:</b>
          <p>{props.housekeeper.housekeeperAddress}</p>
        </li>

        <li className="list-group-item">
          <b>Housekeeper BankNumber:</b>
          <p>{props.housekeeper.housekeeperBankNumber}</p>
        </li>

        <li className="list-group-item">
          <b>Housekeeper Leave:</b>
          <p>{props.housekeeper.housekeeperLeave}</p>
        </li>
       
        <li className="list-group-item">
          <b>Housekeeper Salary:</b>
          <p>{props.housekeeper.housekeeperSalary}</p>
        </li>

        <li className="list-group-item">
          <b>Housekeeper StartDate:</b>
          <p>{props.housekeeper.housekeeperStartDate}</p>
        </li>

        <li className="list-group-item">
          <b>Housekeeper EndDate:</b>
          <p>{props.housekeeper.housekeeperEndDate}</p>
        </li>
        
        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteHousekeeper(props.housekeeper.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HousekeeperDetails;