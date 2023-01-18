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
  now_playing: 'now_playing',
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
};

const tmdbApi = {
  getMovieList: (type, params) => {
    const url = 'movie/' + movieType[type];

    return axiosClient.get(url, { params });
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
  detail: (id) => {
    const url = 'movie/' + id;
    return axiosClient.get(url);
  },
  cast: (id) => {
    const url = 'movie/' + id + '/credits';
    return axiosClient.get(url);
  },
  videos: (id) => {
    const url = 'movie/' + id + '/videos';
    return axiosClient.get(url);
  },
};

export default tmdbApi;
