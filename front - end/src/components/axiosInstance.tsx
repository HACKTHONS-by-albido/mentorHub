import axios from 'axios';
import { getCookie } from 'cookies-next';
const cookie =getCookie('token')
console.log(cookie);

 export const axiosInstance = axios.create({
  
    baseURL: 'http://localhost:8080/api',
     headers:{
       Authorization:`bearer ${cookie}`
     }
  })


  
  
  
  
  
  
  
  
  

