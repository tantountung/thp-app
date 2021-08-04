import React from "react";

const RoomDetails = (props) => {
  return (
    <div className="col-md-6">
      <ul className="list-group">
        <li className="list-group-item">
          <b>Room Number:</b>
          <p>{props.room.roomNumber}</p>
        </li>        
        <li className="list-group-item">
          <b>Room Type:</b>
          <p>{props.room.roomType == null? 
          'No Room Type': props.room.roomType.roomType}</p>
        </li>
              
        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteRoom(props.room.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
          }

export default RoomDetails;
