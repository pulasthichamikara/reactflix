import React, { useEffect } from 'react';
import { useState } from 'react';
import tmdbApi from '../../api/tmdbApi';
import { HiSearch, HiX } from 'react-icons/hi';
import './search.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import Thumbnail from '../tumbnail/Thumbnail';
export default function Search() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [showSeach, setShowSearch] = useState(false);
  const serchHanlder = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getMovie = async () => {
      try {
        const query = { query: search, per_page: 5 };
        console.log(query);
        const response = await tmdbApi.search(query);
        setMovies(response);
      } catch (err) {
        console.log('err', err);
      }
    };
    console.log(movies);
    getMovie();
  };

  return (
    <div className="search-box">
      <span
        className="sechtrigger"
        onClick={() => {
          setShowSearch(!showSeach);
          setMovies([]);
        }}
      >
        {showSeach ? <HiX /> : <HiSearch />}
      </span>

      {showSeach && (
        <div className="search-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                onChange={serchHanlder}
                placeholder="Search movie"
                value={search}
                name="search"
                className="formcontrol"
              />

              <button type="submit" className="search-button">
                <HiSearch />
              </button>
            </div>
          </form>

          <Swiper grabCursor={true} spaceBetween={20} slidesPerView={'auto'}>
            {movies.results && movies.results.length > 0 ? (
              movies.results.map((item, index) => (
                <SwiperSlide
                  key={uuidv4()}
                  className="movielist__item"
                  style={{ width: '150px' }}
                >
                  <div
                    className="search-thumb"
                    onClick={() => {
                      setShowSearch(!showSeach);
                      setMovies([]);
                    }}
                  >
                    <Thumbnail
                      url={`/movie/${item.id}`}
                      image={item.poster_path}
                      title={item.title}
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <>{movies.results && <> No resusts found</>}</>
            )}
          </Swiper>
        </div>
      )}
    </div>
  );
}
