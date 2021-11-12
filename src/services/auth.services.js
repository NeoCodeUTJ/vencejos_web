import axios from 'axios';
const api_url = 'http://localhost:8080/api/auth/login';

const login = (email, password)=>{
    return axios
    .post(api_url,{
        email,
        password,
    })
    .then((res)=>{
        console.log(res)
        if(res.data.token){
            localStorage.setItem('user',JSON.stringify(res.data.token));
        }
        return res.data;
    });

    
};


const logout =() =>{
    localStorage.removeItem('user');
}
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  export default {
    login,
    logout,
    getCurrentUser,
  };