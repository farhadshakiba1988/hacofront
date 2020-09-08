import axios from "axios";


const wrapper = axios.create({
    baseURL: 'http://localhost:3003'
})

export default wrapper;