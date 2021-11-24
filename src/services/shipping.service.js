import axios from "axios";
const api_url = `http://localhost:8080/api/shippings`;
const token = localStorage.getItem("token")?.replaceAll('"', "");
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

export const listShippings = () => {
  try {
    const response = axios.get(api_url, config);
    return response;
  } catch (error) {
    return error;
  }
}


export const addShip = (data) => {
  console.log(config);
  axios.post(api_url, data)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

export default {
  listShippings,
  addShip
}
