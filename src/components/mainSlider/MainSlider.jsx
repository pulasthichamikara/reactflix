import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import tmdbApi from '../../api/tmdbApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import './mainslider.scss';
import { apiConfig } from '../../api/apiConfig';
import { Autoplay } from 'swiper';
import '../button/button.scss';

export default function MainSlider() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movies = async () => {
      try {
        const params = { page: 1 };
        const response = await tmdbApi.getMovieList('upcoming', params);
        setMovies(response.results.slice(0, 10));
        console.log(response.results.slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    };
    movies();
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
                <button className="button btn-rounded">Watch Trailar</button>
              </div>
            </div>
            <div className="hero-slider__item__info__right">
              <img src={`${apiConfig.w500Img(item.poster_path)}`} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        grabCursor={true}
        autoplay={{ delay: 5000 }}
      >
        {movies.length &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>{bgImg(item)}</SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
