import axios from 'axios';

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
    baseURL: import.meta.env.VITE_API_URL || 'https://book-store-e-commerce-9dla.onrender.com/api/v1/books',
    headers: {
        'Content-Type': 'application/json',
    },
});

//* Add a request interceptor to add the token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
