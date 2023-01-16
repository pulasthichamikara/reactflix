import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import tmdbApi from '../../api/tmdbApi';
import './mainslider.scss';

export default function MainSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMovieList('upcoming', { page: 1 });
        console.log(response);
      } catch (err) {}
    };
    movies();
  }, []);

  return <div>MainSlider</div>;
}
