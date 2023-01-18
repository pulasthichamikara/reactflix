import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiConfig } from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';
import Cast from '../../components/cast/Cast';
import SimilarMovies from '../../components/similarMovies/SimilarMovies';

import Videos from '../../components/videos/Videos';

import './detail.scss';

export default function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [activeHeader, setActiveheader] = useState(0);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await tmdbApi.detail(id);
        setMovie(response);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
    setTimeout(() => {
      setActiveheader(1);
    }, 1000);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <div className={activeHeader ? 'detail_active' : ''}>
        {movie && movie.id && (
          <div
            className="sliderBg detail_hero-slider__item "
            style={{
              background: ` linear-gradient(to bottom, rgba(15, 15, 15, 0.52), rgba(15, 15, 15)),url(${apiConfig.originalImg(
                movie.backdrop_path
              )})`,
            }}
          >
            <div className="detail_hero-slider__item__content container">
              <div className="detail_hero-slider__item__info">
                <div className="detail_hero-slider__item__info__left">
                  <h2 className="title">{movie.title}</h2>
                  <div className="overvie">{movie.overview}</div>
                  <div className="buttons"></div>
                </div>
                <div className="detail_hero-slider__item__info__right">
                  <img
                    src={`${apiConfig.w500Img(movie.poster_path)}`}
                    alt={movie.title}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* cast */}
      {movie && movie.id && <Cast id={movie.id} />}
      {movie && movie.id && <Videos id={movie.id} />}
      {movie && movie.id && <SimilarMovies id={movie.id} />}
    </div>
  );
}
