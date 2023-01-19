import React from 'react';
import './footer.scss';
import bg from '../images/header.jpg';
import movieDb from '../images/moviedb.svg';

export default function Footer() {
  return (
    <div
      className="footer container"
      style={{
        background: ` linear-gradient(to bottom, rgba(15, 15, 15, 0.52), rgba(15, 15, 15)),url(${bg})`,
      }}
    >
      <p>
        <a
          href="https://pulasthichamikara.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Developed by Pulasthi Chamikara Karunadhipathi
        </a>
      </p>
      <img src={movieDb} width="60" />
    </div>
  );
}
