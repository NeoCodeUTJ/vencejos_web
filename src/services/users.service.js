import axios from 'axios';

const api_url = 'http://localhost:8080/api/users';
const token = localStorage.getItem("token")?.replaceAll('"', "");

const config = {
    headers: { Authorization: `Bearer ${token}` }
}

export const getUsers = () => {
    const response = axios.get(api_url, config);
    return response;
}

export default getUsers;
