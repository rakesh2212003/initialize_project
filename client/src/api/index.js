import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:9000" })

export const SIGNUP = (authData) => API.post('/user/signup', authData);
export const LOGIN = (authData) => API.post('/user/login', authData);