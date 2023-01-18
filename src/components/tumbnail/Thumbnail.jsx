import React from 'react';
import { Link } from 'react-router-dom';
import { apiConfig } from '../../api/apiConfig';
import './thumbnail.scss';

export default function Thumbnail({ image, link, title }) {
  return (
    <Link className="thumbnail">
      <img src={`${apiConfig.w500Img(image)}`} alt={title} />
      <p>{title}</p>
    </Link>
  );
}
