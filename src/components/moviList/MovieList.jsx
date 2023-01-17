import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiConfig } from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';
import '../button/button.scss';
import './movieList.scss';

export default function MovieList({ type }) {
  let title = '';
  switch (type) {
    case 'popular':
      title = 'popular';
      break;
    case 'top_rated':
      title = 'Top rated';
      break;
    case 'upcoming':
      title = 'Upcoming';
      break;
    case 'now_playing':
      title = 'Now Playing';
      break;
    default:
      title = 'popular';
  }

  const [movielist, setMovieList] = useState([]);
  useEffect(() => {
    const movies = async () => {
      try {
        const params = { page: 1 };
        const response = await tmdbApi.getMovieList(type, params);
        setMovieList(response.results);
        console.log(response.results.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    };
    movies();
  }, []);

  return (
    <div>
      <div className="container">
        <h2>{title}</h2>

        <div className="movielist">
          <Swiper grabCursor={true} spaceBetween={20} slidesPerView={'auto'}>
            {movielist &&
              movielist.map((item) => (
                <SwiperSlide key={item.id} className="movielist__item">
                  <Link>
                    <img
                      src={`${apiConfig.w500Img(item.poster_path)}`}
                      alt={item.title}
                    />
                    <p>{item.title}</p>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
