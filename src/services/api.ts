import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
    }
    return Promise.reject(error);
  }
);

export const fetchAdminDashboardData = async () => {
  try {
    const response = await api.get("/data/admin");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch dashboard data");
  }
};

export const fetchUserDashboardData = async () => {
  try {
    const response = await api.get("/data/user");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch dashboard data");
  }
};

export default api;
