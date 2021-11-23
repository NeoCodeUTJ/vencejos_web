import axios from "axios";
const api_url = `http://localhost:8080/api/shippings`;
console.log(api_url);
const token = localStorage.getItem("token")?.replaceAll('"', "");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const addShip = (data) => {
  console.log(data);

  return axios.post(api_url, config, data).then((res) => {
    return res.data;
  });
};

export default {
  addShip,
};
