import axios from "axios";

export const registerUser = async (newUser:any) => {
    const axiosInstance = axios.create({
        baseURL: process.env.BACKEND_URL_PORT,
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const response = axiosInstance.post('/register', newUser)
        .then(res => res)
        .catch(err => err.response)

    return response;
};

export const loginUser = (newUser:any) => {
    const axiosInstance = axios.create({
        baseURL: process.env.BACKEND_URL_PORT,
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const response = axiosInstance.post('/login', newUser)
        .then(res => res)
        .catch(err => err.response)
    
    return response;
};