import React from "react";

const ContractDetails = (props) => {

//   let roomNumber = 'No Language';
//   if(props.contract.roomInQuestion != null){
          
    
//     roomNumber = props.contract.roomInQuestion.map((roomInQuestion) =>
      
//       {
// return (
//     <p key = {roomInQuestion.room.id}>{roomInQuestion.room.roomNumber}</p>
//  )
//       });
 
//     }


  return (
    <div className="col-md-6">
      <ul className="list-group">       
         
        <li className="list-group-item">
          <b>Room Price:</b>
          <p>{props.contract.roomPrice}</p>
        </li>

        <li className="list-group-item">
                    <b>Payment Date:</b>
          <p>{props.contract.paymentDate}</p>
        </li>       

        <li className="list-group-item">
          <b>Start Date:</b>
          <p>{props.contract.startDate}</p>
        </li>

        <li className="list-group-item">
          <b>End Date:</b>
          <p>{props.contract.endDate}</p>
        </li>

        <li className="list-group-item">
          <b>Room In Question:</b>
          <p>{props.contract.roomInQuestionId == null?
          'No Room': props.contract.roomInQuestionId.roomNumber}</p>
        {/* <p>{roomNumber}</p> */}
        </li>
       
        <li className="list-group-item">
          <b>Tenant In Question:</b>
          <p>{props.contract.tenantInQuestion == null?
          'No Tenant': props.contract.tenantInQuestion.tenantName}</p>
        </li>

                
        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteContract(props.contract.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ContractDetails;