import React, { useEffect } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import tmdbApi from '../../api/tmdbApi';
import ThumbnailCast from '../tumbnail/ThumbnailCast';

export default function Cast({ id }) {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    setCast([]);
    const movies = async () => {
      try {
        const response = await tmdbApi.cast(id);
        setCast(response.cast);
      } catch (err) {
        console.log(err);
      }
    };
    movies();
  }, [id]);

  return (
    <div className="container" style={{ marginTop: '-5rem' }}>
      <h3 className="mb-2">cast</h3>
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={'auto'}>
        {cast &&
          cast.map((item, index) => (
            <SwiperSlide
              key={uuidv4()}
              className="movielist__item"
              style={{ width: '150px' }}
              lazy={true}
              lazyLoading={{
                loadPrevNext: true,
                loadPrevNextAmount: 3,
              }}
            >
              <div>
                <ThumbnailCast
                  image={item.profile_path}
                  title={item.character}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
