

export default function getRooms() {
    return fetch('api/React')
        .then(data => data.json());
}