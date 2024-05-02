import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='headerContainer'>
      <div className='contentWrapper'>
        <h1 className='marquee'>FilmFlick</h1>
        <img
          src='./assets/Cinema-Transparent.png'
          alt='Film Icon'
          className='filmIcon'
        />
      </div>
      <h2>
        Discover the movies currently in production from TheMovieDataBase API
      </h2>
    </div>
  );
};

export default Header;
