import axios from 'axios';
import authHeader from './auth-header';

const api_url = 'http://localhost:8080/api/'

const getAllUser = () => {
    return axios.get(api_url + 'users', { headers: authHeader() });
  }

  export default{
      getAllUser
  }