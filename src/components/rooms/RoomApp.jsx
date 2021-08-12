
import React, { Component } from "react";
import RoomTable from "./RoomTable";
import RoomDetails from "./RoomDetails";
import RoomCreate from "./RoomCreate";
import getRooms, { getRoomById,  createRoom, deleteRoom } from "../api/roomsApi";

import "../../css/App.css";

class RoomApp extends Component {
  state = {
    detailsRoom: null,
    createRoom: false,
    roomList: [],
  };

  componentDidMount() {
    const _this = this;
    getRooms().then((rooms) => {
      _this.setState({ roomList: rooms });
    });
  }

  findRoom = async (id) => {
       return await getRoomById(id);
  };

  showRoom = async (id) => {
    const room = await this.findRoom(id);
    if (room != null) {
      this.setState({
        detailsRoom: room,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsRoom: null,
    });
  };

  deleteRoomHandler = (id) => {
    const room = this.findRoom(id);
    if (room != null) {
      if (deleteRoom(id)) {
        const rooms = this.state.roomList;
        rooms.forEach((element) => {
          if (element.id === id) {
            rooms.pop(element);
          }
        });

        this.setState({
          roomList: rooms,
          detailsRoom: null,
        });
      }
    }
  };

  showCreateRoom = () => {
    this.setState({
      createRoom: true,
    });
  };

  addRoom = async (room) => {
    const roomList = this.state.roomList;
    
    room = await createRoom(room);

    if (room !== undefined) {
      roomList.push(room);
    }

    this.setState({
      roomList: roomList,
      createRoom: false,
    });
  };

  closeCreate = () => {
    this.setState({
      createRoom: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsRoom != null ? (
        <RoomDetails
          room={this.state.detailsRoom}
          closeDetails={this.closeDetails}
          deleteRoom={this.deleteRoomHandler}
        />
      ) : this.state.createRoom ? (
        <RoomCreate addRoom={this.addRoom} closeCreate={this.closeCreate} />
      ) : (
        <div className="col-md-6">
          <button onClick={this.showCreateRoom} className="btn btn-success">
            Add Room
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <React.Fragment>
        
        <div className="container stay-clear">
          <h3>Room SPA</h3>
          <hr />
          <div className="row">
            <RoomTable rooms={this.state.roomList} showRoom={this.showRoom} />
            {sideElement}
          </div>
        </div>

             </React.Fragment>
    );
  }
}

export default RoomApp;