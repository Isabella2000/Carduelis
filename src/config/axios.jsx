import axios from 'axios';
// Cliente axios
const Axios = axios.create({
baseURL: `${import.meta.env.BACKEND_URL}/api`
})
export default Axios;