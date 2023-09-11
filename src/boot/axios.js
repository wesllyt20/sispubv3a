import axios from 'axios'

export const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_CONVOCATORIASBDAUTH,
    withCredentials: true
})

export const listConv = axios.create({
    baseURL: import.meta.env.VITE_CONVOCATORIASBDAUTH,
})

