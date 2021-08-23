import axios from 'axios';

export default function getContracts() {
    return axios.get('https://localhost:44320/api/contractsReact')
        .then(data => data.data);
}

export function getRooms() {
    return axios.get('https://localhost:44320/api/roomsReact')
        .then(data => data.data);
}
export function getTenants() {
    return axios.get('https://localhost:44320/api/tenantsReact')
        .then(data => data.data);
}


export async function getContractById(id) {
    try {
        let response = await axios.get('https://localhost:44320/api/contractsReact/' + id);
                let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function createContract(contract) {

console.log (contract);

    try {
        let response = await axios.post('https://localhost:44320/api/contractsReact/', {
            RoomPrice: contract.RoomPrice,
            PaymentDate: contract.PaymentDate,
            StartDate: contract.StartDate,
            EndDate: contract.EndDate,
            RoomInQuestionId: contract.RoomInQuestionId,
            TenantInQuestionId  : contract.TenantInQuestionId,
        });
      
                let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function deleteContract(id) {

    try {
        let response = await axios.delete('https://localhost:44320/api/contractsReact/' + id);
                return true;
    }
    catch (e) {
        console.log('Error!', e);
        return false;
    }
}