import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-ridam.herokuapp.com'
});

export default api;