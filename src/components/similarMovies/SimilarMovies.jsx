import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiConfig } from '../../api/apiConfig';
import tmdbApi, { movieType } from '../../api/tmdbApi';
import '../button/button.scss';
import Thumbnail from '../tumbnail/Thumbnail';

export default function SimilarMovies({ id }) {
  const [movielist, setMovieList] = useState([]);

  useEffect(() => {
    const movies = async () => {
      try {
        const params = { page: 1 };
        const response = await tmdbApi.similar(id);
        setMovieList(response.results);
        console.log(response.results);
      } catch (err) {
        console.log(err);
      }
    };
    movies();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="movielisr__header">
          <h3>Similar movies</h3>
        </div>

        <div className="movielist">
          <Swiper grabCursor={true} spaceBetween={20} slidesPerView={'auto'}>
            {movielist &&
              movielist.map((item) => (
                <SwiperSlide key={item.id} className="movielist__item">
                  <Thumbnail
                    url={`/movie/${item.id}`}
                    image={item.poster_path}
                    title={item.title}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
