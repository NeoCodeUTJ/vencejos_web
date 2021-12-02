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
  axios.post(api_url, data)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}


export const listShippingById = (id) => {
  try {
    const response = axios.get(`${api_url}/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export const editShippingById = (id, data) => {
  try {
    const response = axios.put(`${api_url}/edit/${id}`, data);
    return response;
  } catch (error) {
    return error;
  }
}


export default {
  listShippings,
  addShip,
  listShippingById,
  editShippingById
}
