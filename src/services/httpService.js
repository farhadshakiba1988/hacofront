import axios from "axios";
import { toast } from "react-toastify";
import HttpDefaultMessage from "./../Function/httpDefaultMessage";
// axios.defaults.headers.post["Content-Type"] = "application/json";
 axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
const token = localStorage.getItem("token");

if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
axios.interceptors.response.use(null, (error) => {
    const expextedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expextedError) {
        console.log('خطا در ورود:', error)
        // HttpDefaultMessage(error.response.status)
        // if (error.response.status === 401) {
        //     localStorage.removeItem('token');
        //     window.location = '/login';
        // }
    }
    return Promise.reject(error);
});
   export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

