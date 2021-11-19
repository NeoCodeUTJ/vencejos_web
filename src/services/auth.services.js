import axios from 'axios';
const api_url = 'http://localhost:8080/api/auth/login';

const login = (email, password)=>{
    return axios
    .post(api_url,{
        email,
        password,
    })
    .then((res)=>{
        const name = res.data.data.name;
        const fsurname = res.data.data.first_surname;
        const sndsurname = res.data.data.second_surname;
        const fullname = `${name} ${fsurname} ${sndsurname}`;
        console.log(fsurname, sndsurname);
        if(res.data.token){
            localStorage.setItem('token',JSON.stringify(res.data.token));
            localStorage.setItem('name',JSON.stringify(fullname));
            
        }
        return res.data;
    });

    
};


const logout =() =>{
    localStorage.removeItem('token');
}
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("token"));
  };
  
  export default {
    login,
    logout,
    getCurrentUser,
  };