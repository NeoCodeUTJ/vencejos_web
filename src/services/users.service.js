import axios from 'axios';

const api_url = 'http://localhost:8080/api/shippings';
const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
console.log(user);

const config = {
    headers: { Authorization: `Bearer ${token}` }
}

const getUsers = () => {
    return axios.get(api_url, config)
        // .then(data => {
        //     console.log(data);
        //     return data;
        // })
        // .catch(error => {
        //     console.log(error);
        //     return error;
        // });
}

export default getUsers;
