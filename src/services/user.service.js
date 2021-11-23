import authHeader from './auth-header';
import axios from "axios";
require("dotenv").config();
// const api_url = `${process.env.URL_API}shippings`;
const api_url = "http://localhost:8080/api/users"
const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

const getAllUser = () => {
    return axios.get(api_url + 'users', { headers: authHeader() });
  }

export const addUsers = (data) => {
    console.log(data);
    return axios
      .post(api_url, config, {
        data,
      })
      .then((res) => {
        return res.data;
      });
  };

  export default{
      getAllUser,
      addUsers
  }