import React from 'react';

import './pagination.styles.scss';

const Pagination = ({
  placesPerPage,
  totalPlaces,
  paginate,
  setPlacesPerPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPlaces / placesPerPage); i++) {
    pageNumbers.push(i);
  }

  const listenPageValue = e => {
    setPlacesPerPage(e.target.value);
  };

  return (
    <nav className='pagination-nav'>
      <select name='page-number' id='page-number' onChange={listenPageValue}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
