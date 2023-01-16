import axios from 'axios';
import queryString from 'query-string';
import { apiConfig } from './apiConfig';
import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
};

const tmdbApi = {
  getMovieList: (type, params) => {
    const url = 'movie/' + movieType[type];
    //console.log(url);
    //return axiosClient.get(url, params);
    const testAxi = axios.create({
      baseURL: apiConfig.baseUrl,
      headers: {
        'content-type': 'application.json',
      },
      paramsSerializer: (params) =>
        queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
    });
    testAxi.get(url, params);
  },
  getTvList: (type, params) => {
    const url = 'tv/' + tvType[type];
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + '/' + id + '/videos';
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = 'search' + category[cate];
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + '/' + id;
    return axiosClient.get(url, params);
  },
};

export default tmdbApi;
