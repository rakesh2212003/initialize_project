import axios from 'axios'

const API = axios.create({ baseURL: process.env.BASE_URL })

// export const [functionName] = (data) => API.post('[route]', data);