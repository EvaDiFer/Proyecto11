import React from 'react';
import './NavPages.css';

const NavPages = ({ page, setPage, limit }) => {
  return (
    <div className='nav-pages'>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        {'<'}
      </button>
      <p>{page}</p>
      <button onClick={() => setPage(page + 1)}>{'>'}</button>
    </div>
  );
};

export default NavPages;
