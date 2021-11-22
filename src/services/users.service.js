import axios from 'axios';

const api_url = 'http://localhost:8080/api/shippings';

const getUsers = () => {
    return axios.get(api_url)
}

export default getUsers;
