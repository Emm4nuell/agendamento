import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.0.189:8080/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor de requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Interceptor de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    } else if (error.response?.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);
