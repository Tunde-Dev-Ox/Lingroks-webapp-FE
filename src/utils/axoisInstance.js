import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request Interceptor: Attach Authorization Token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle Unauthorized Errors

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // ✅ Trigger auth redirect inside a React component
      if (typeof window !== 'undefined') {
        // ✅ Remove token and log out user when unauthorized
        toast.error('Session expired. Please log in again.');
        localStorage.removeItem('authToken');
        localStorage.removeItem('userProfile');
        window.dispatchEvent(new Event('logout')); // Dispatch a global event
      }
    } else if (error.response?.status === 500) {
      toast.error('Server error. Please try again later.');
    } else {
      toast.error(error.response?.data?.message || 'An error occurred.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
