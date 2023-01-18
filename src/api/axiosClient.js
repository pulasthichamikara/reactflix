import axios from 'axios';
import queryString from 'query-string';
import { apiConfig } from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
});

axiosClient.interceptors.request.use((config) => {
  console.log('config', config);
  config.params = {
    ...config.params,
    api_key: apiConfig.apiKey,
  };
  config.paramsSerializer = (params) => queryString.stringify(params);
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      // console.log('res', response.data);
      return response.data;
    }
    // return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
