import React, { useEffect } from 'react';
import { useState } from 'react';
import './videos.scss';

import tmdbApi from '../../api/tmdbApi';

export default function Videos({ id }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const vid = async () => {
      try {
        const response = await tmdbApi.videos(id);
        setVideos(response.results.reverse().slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    };
    vid();
  }, [id]);
  console.log(videos);
  return (
    <div className="container">
      <h3 className="mb-2">Videos</h3>
      {videos.length > 0 &&
        videos.map((item, index) => (
          <div className="video-responsive mb-2">
            <iframe
              width="853"
              height="480"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              src={`https://www.youtube.com/embed/${item.key}?controls=0`}
            ></iframe>
          </div>
        ))}
    </div>
  );
}
