import React from 'react';
import './pageHeader.scss';
import bg from '../../images/header.jpg';
export default function PageHeader({ title }) {
  return (
    <div
      className="pageHeader"
      style={{
        background: ` linear-gradient(to bottom, rgba(15, 15, 15, 0.52), rgba(15, 15, 15)),url(${bg})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}
