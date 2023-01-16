import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import tmdbApi from '../../api/tmdbApi';
import './mainslider.scss';

export default function MainSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   // const movies = tmdbApi.getMovieList('upcoming', { page: 1 });
  }, []);

  const getMovies = () => {
    try {
    } catch (err) {}
  };

  return <div>MainSlider</div>;
}
