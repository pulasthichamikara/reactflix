import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiConfig } from '../../api/apiConfig';
import tmdbApi, { movieType } from '../../api/tmdbApi';
import '../button/button.scss';
import Thumbnail from '../tumbnail/Thumbnail';
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
    if (type in movieType) {
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
    } else {
      title = 'no data available';
    }
  }, []);

  return (
    <div>
      <div className="container">
        <div className="movielisr__header">
          <h2>{title}</h2>
          <Link to={type} className="button btn-border">
            See More
          </Link>
        </div>

        <div className="movielist">
          <Swiper grabCursor={true} spaceBetween={20} slidesPerView={'auto'}>
            {movielist &&
              movielist.map((item, index) => (
                <SwiperSlide key={item.id + index} className="movielist__item">
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
