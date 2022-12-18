import axios from "axios"; 

export const axiosInstance = axios.create({
    baseURL : "https://fashion-blogging-aditya.herokuapp.com/api/"
    // baseURL : "http://localhost:5000/api/"
})