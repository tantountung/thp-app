import axios from 'axios';

export default function getHousekeepers() {
    return axios.get('https://localhost:44320/api/housekeepersReact')
        .then(data => data.data);
}

export async function getHousekeeperById(id) {
    try {
        let response = await axios.get('https://localhost:44320/api/housekeepersReact/' + id);
                let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function createHousekeeper(housekeeper) {

    try {
        let response = await axios.post('https://localhost:44320/api/housekeepersReact/', {
            housekeeperName: housekeeper.housekeeperName,
            housekeeperPhone: housekeeper.housekeeperPhone,
            housekeeperAddress: housekeeper.housekeeperAddress,
            housekeeperBankNumber: housekeeper.housekeeperBankNumber,
            housekeeperLeave: housekeeper.housekeeperLeave,
            housekeeperSalary: housekeeper.housekeeperSalary,
            housekeeperStartDate: housekeeper.housekeeperStartDate,
            housekeeperEndDate: housekeeper.housekeeperEndDate,
        });      
    

                let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function deleteHousekeeper(id) {

    try {
        let response = await axios.delete('https://localhost:44320/api/housekeepersReact/' + id);
                return true;
    }
    catch (e) {
        console.log('Error!', e);
        return false;
    }
}