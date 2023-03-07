import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { apiConfig } from '../../api/apiConfig';
import './thumbnail.scss';
import noimg from '../../images/noimg.png';

export default function Thumbnail({ image, url, title }) {
  let img = '';
  if (image == null) {
    img = noimg;
  } else {
    img = apiConfig.w500Img(image);
  }
  return (
    <Link className="thumbnail" to={`${url}`}>
      <img src={img} alt={title} loading="lazy" />
      <p className="text-white ">{title}</p>
    </Link>
  );
}
