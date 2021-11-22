import axios from "axios";
require("dotenv").config();
const api_url = `${process.env.URL_API}shippings`;
const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const addShip = (data) => {
  return axios
    .post(api_url, config, {
      data,
    })
    .then((res) => {
      return res.data;
    });
};

export default {
  addShip,
};
