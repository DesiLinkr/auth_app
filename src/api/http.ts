import axios from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    requiresAuth?: boolean;
  }
}

const http = axios.create({
  baseURL: process.env.api || "http://localhost:3000",
  withCredentials: true,
});

http.interceptors.request.use((config: any) => {
  if (config.requiresAuth) {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  return config;
});

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!error.response) {
      return Promise.reject({
        status: 0,
        message: "Network error. Please check your internet connection.",
      });
    }

    const { status, data } = error.response;

    return Promise.reject({
      status,
      ...data,
    });
  }
);

export default http;
