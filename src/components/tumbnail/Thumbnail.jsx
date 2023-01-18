import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { apiConfig } from '../../api/apiConfig';
import './thumbnail.scss';

export default function Thumbnail({ image, url, title }) {
  return (
    <Link className="thumbnail" to={`${url}`}>
      <img src={`${apiConfig.w500Img(image)}`} alt={title} loading="lazy" />
      <p>{title}</p>
    </Link>
  );
}
