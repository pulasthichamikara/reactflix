import React from 'react';
import noimg from '../../images/noimg.png';

import { apiConfig } from '../../api/apiConfig';
import './thumbnail.scss';

export default function ThumbnailCast({ image, title }) {
  let img = '';
  if (image == null) {
    img = noimg;
  } else {
    img = apiConfig.w500Img(image);
  }
  return (
    <div className="thumbnail">
      <img
        src={`${img}`}
        alt={title}
        onError={() => {
          console.log(image);
        }}
      />
      <p>{title}</p>
    </div>
  );
}
