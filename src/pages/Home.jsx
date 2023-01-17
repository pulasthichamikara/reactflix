import React from 'react';
import MainSlider from '../components/mainSlider/MainSlider';
import MovieList from '../components/moviList/MovieList';

export default function Home() {
  return (
    <div style={{ minHeight: '1500px' }}>
      <MainSlider />
      <MovieList type={'popular'} />
      <MovieList type={'top_rated'} />
      <MovieList type={'upcoming'} />
    </div>
  );
}
