import axios from 'axios';

export default function getRooms() {
    return axios.get('https://localhost:44320/api/roomsReact')
        .then(data => data.data);
}

export async function getRoomById(roomInQuestionId) {
    try {
        let response = await axios.get('https://localhost:44320/api/roomsReact/' + roomInQuestionId);
                let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function createRoom(room) {

    try {
        let response = await axios.post('https://localhost:44320/api/roomsReact/', {
            roomNumber: room.roomNumber,
            roomType: room.roomType
        });
                let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function deleteRoom(roomInQuestionId) {

    try {
        let response = await axios.delete('https://localhost:44320/api/roomsReact/' + roomInQuestionId);
                return true;
    }
    catch (e) {
        console.log('Error!', e);
        return false;
    }
}