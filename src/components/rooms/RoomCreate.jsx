import React, { Component } from "react";


class RoomCreate extends Component {
  createRoom = (event) => {
    event.preventDefault();

    const room = {
      // id: 0,      
      roomNumber: Number(event.target["roomNumber"].value),      
      roomType: event.target["roomType"].value,
    };

    this.props.addRoom(room);
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add Room</h3>
        </div>

        <form onSubmit={this.createRoom}>
          
          <div className="row mb-2">
            <label htmlFor="roomNumber" className="col-2 mt-2">
            Room Number:
            </label>
            <input
              id="roomNumber"
              type="number"
              required              
              className="form-control col-10"
              placeholder="Enter Room Number"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="roomType" className="col-2 mt-2">
            Room Type:
            </label>
            <input
              id="roomType" 
              type="text"             
              className="form-control col-10"
              placeholder="Enter Room Type"
            />
          </div>
          
          <div className="row d-flex justify-content-center">
            <input
              type="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input type="submit" 
            className=" btn btn-success" 
            value="Create" />
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

export default RoomCreate;
