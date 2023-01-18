import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
export default function Header() {
  const headerRef = useRef(null);
  const headerNav = [
    { display: 'Home', path: '/' },
    { display: 'Popular', path: '/popular' },
    { display: 'Top rated', path: '/top_rated' },
    { display: 'Upcoming', path: '/upcoming' },
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    let top = document.documentElement.scrollTop;

    top >= 100
      ? headerRef.current.classList.add('shrink')
      : headerRef.current.classList.remove('shrink');
  };

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">Tmovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((navItem, i) => (
            <li key={i}>
              <Link to={navItem.path}>{navItem.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
