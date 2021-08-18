import axios from 'axios';

export default function getTenants() {
    return axios.get('https://localhost:44320/api/tenantsReact')
        .then(data => data.data);
}

export async function getTenantById(id) {
    try {
        let response = await axios.get('https://localhost:44320/api/tenantsReact/' + id);
                let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function createTenant(tenant) {

    try {
        let response = await axios.post('https://localhost:44320/api/tenantsReact/', {
            tenantName: tenant.tenantName,
            tenantPhone: tenant.tenantPhone,
            tenantDocument: tenant.tenantDocument,
        });
                let json = await response.data;
                return json;
    }
    catch (e) {
        console.log('Error!', e);
    }
}

export async function deleteTenant(id) {

    try {
        let response = await axios.delete('https://localhost:44320/api/tenantsReact/' + id);
                return true;
    }
    catch (e) {
        console.log('Error!', e);
        return false;
    }
}