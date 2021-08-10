import React from "react";

const RoomTable = (props) => {
  const rows = props.rooms.map((room) => {
    return (
      <tr key={room.id}>
        <td>{room.roomNumber}</td>
        <td>{room.roomType}</td>      
        <td>
          <button 
          onClick={() => {
            props.showRoom(room.id);
            }}
              className="btn btn-info">
          Details
          </button>        
                  </td>
      </tr>
    );
  });

  return (
    <div className="col-md-6 middle-bar">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Room Number</th>
            <th>Room Type</th>           
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default RoomTable;