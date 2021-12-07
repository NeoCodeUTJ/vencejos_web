import axios from "axios";
const api_url = `http://localhost:8080/api/reports`;
const token = localStorage.getItem("token") ?. replaceAll('"', "");
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
};


export const listShippingsDelivered = () => {
    try {
        const response = axios.get(api_url+'/Delivered', config);
        return response;
    } catch (error) {
        return error;
    }
}
export const listShippingsOnTheWay = () => {
    try {
        const response = axios.get(api_url+'/OnTheWay', config);
        return response;
    } catch (error) {
        return error;
    }
}
export const listShippingsInProgress = () => {
    try {
        const response = axios.get(api_url+'/InProgress', config);
        return response;
    } catch (error) {
        return error;
    }
}
export const listAllShippings = () => {
    try {
        const response = axios.get(api_url+'/allReports', config);
        return response;
    } catch (error) {
        return error;
    }
}


export default{
    listShippingsDelivered
}