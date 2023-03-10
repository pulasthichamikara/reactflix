import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import tmdbApi from '../../api/tmdbApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import './mainslider.scss';
import '../button/button.scss';
import { apiConfig } from '../../api/apiConfig';
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

export default function MainSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const params = { page: 1 };
        const response = await tmdbApi.getMovieList('upcoming', params);
        setMovies(response.results.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);

  const bgImg = (item) => {
    return (
      <div
        className="sliderBg hero-slider__item"
        style={{
          background: ` linear-gradient(to bottom, rgba(15, 15, 15, 0.52), rgba(15, 15, 15)),url(${apiConfig.originalImg(
            item.backdrop_path
          )})`,
        }}
      >
        <div className="hero-slider__item__content container">
          <div className="hero-slider__item__info">
            <div className="hero-slider__item__info__left">
              <h2 className="title">{item.title}</h2>
              <div className="overvie">{item.overview}</div>
              <div className="buttons">
                <Link to={`/movie/${item.id}`} className="button btn-rounded">
                  See more{' '}
                </Link>
              </div>
            </div>
            <div className="hero-slider__item__info__right">
              <img
                src={`${apiConfig.w500Img(item.poster_path)}`}
                alt={item.title}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '50vh' }}>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        autoplay={{ delay: 5000 }}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>{bgImg(item)}</SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
