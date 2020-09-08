import axios from "axios";


const wrapper = axios.create({
    baseURL: 'http://'
})

export default wrapper;