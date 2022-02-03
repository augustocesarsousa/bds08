import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://localhost:8080';

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers
      }
    : config.headers;
  return axios({ ...config, baseURL, headers });
};

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    //
    return config;
  },
  function (error) {
    //
    return Promise.reject(error);
  }
);
