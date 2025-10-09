import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    // const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk2YTZhLTY0OTctNGY1Yi1iMTQ1LWNmYjQ5NWI2ZGNiNiIsImVtYWlsIjoic3VwZXJBZG1pbkBleGFtcGxlLmNvbSIsIm5hbWUiOiJzdXBlckFkbWluIiwidHlwZSI6IlNVUEVSX0FETUlOIiwiaWF0IjoxNzU5OTk3NjI2LCJleHAiOjE3NjAwODQwMjZ9.O13z5RAMnuxJhBQ5rBcXwjNbAv92Urg6_HJzs5p-Gxw"

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      if (config.headers && config.headers["Content-Type"]) {
        delete config.headers["Content-Type"];
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;