import axios from 'axios';

export default function getRooms() {
    return fetch('https://localhost:44320/api/react')
        .then(data => data.json());
}

export async function getRoomById(id) {
    try {
        let response = await fetch('https://localhost:44320/api/react' + id);
                let json = await response.json();
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function createRoom(room) {

    try {
        let response = await axios.post('https://localhost:44320/api/React/', {
            roomNumber: room.roomNumber,
            roomType: room.roomType
        });
        console.log(response);
        let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function deleteRoom(id) {

    try {
        let response = await axios.delete('https://localhost:44320/api/React/' + id);
        console.log(response);

        return true;
    }
    catch (e) {
        console.log('Error!', e);
        return false;
    }
}