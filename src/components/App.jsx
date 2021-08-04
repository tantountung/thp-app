
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import RoomTable from "./rooms/RoomTable";
import RoomDetails from "./rooms/RoomDetails";
import RoomCreate from "./rooms/RoomCreate";

import "../css/App.css";

class App extends Component {
  state = {
    detailsRoom: null,
    createRoom: false,
    roomList: [
      {
        id: 1,
        roomNumber: 101,
        roomType: "Suite",
      },
      {
        id: 2,
        roomNumber: 102,
        roomType: "Deluxe",
      },
      {
        id: 3,
        roomNumber: 103,
        roomType: "Standard",
      },
      {
        id: 4,
        roomNumber: 104,
        roomType: "Suite",
      },
      {
        id: 5,
        roomNumber: 105,
        roomType: "Standard",
      },
    ],
  };

  findRoom = (id) => {
    const rooms = this.state.roomList;
    let foundRoom = null;
    rooms.forEach((element) => {
      if (element.id === id) {
        foundRoom = element;
      }
    });
    return foundRoom;
  };

  showRoom = (id) => {
    const room = this.findRoom(id);
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

  deleteRoom = (id) => {
    const room = this.findRoom(id);
    if (room != null) {
      const rooms = this.state.roomList;
      rooms.splice(rooms.indexOf(room), 1);
      this.setState({
        roomList: rooms,
        detailsRoom: null,
      });
    }
  };

  createRoom = () => {
    this.setState({
      createRoom: true,
    });
  };

  addRoom = (room) => {
    const roomList = this.state.roomList;
    const newId =
      roomList.reduce((rowRoom, highest) => {
        if (rowRoom.id > highest.id) {
          return rowRoom.id;
        }
        return highest;
      }).id + 1; 
    room.id = newId;

    roomList.push(room);

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
          deleteRoom={this.deleteRoom}
        />
      ) : this.state.createRoom ? (
        <RoomCreate addRoom={this.addRoom} closeCreate={this.closeCreate} />
      ) : (
        <div>
          <button onClick={this.createRoom} className="btn btn-success">
            Add Room
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Room SPA</h3>
          <hr />
          <div className="row">
            <RoomTable rooms={this.state.roomList} showRoom={this.showRoom} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
