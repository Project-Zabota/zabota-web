import axios from "axios";

const instance = axios.create({
    baseURL : 'http://localhost:5179/api/',
});

export default instance;