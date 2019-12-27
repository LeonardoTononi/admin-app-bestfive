import React from 'react';

import YesIcon from '../../assets/icon-done.png';
import NotIcon from '../../assets/not-icon.png';

const PlaceList = ({ listContent, setPlaceSelected }) => {
  return (
    <div className='table-container'>
      <div className='search'>
        <label>Search</label>
        <input type='text' />
      </div>
      <table className='table-content'>
        <thead>
          <tr>
            <th>Name</th>
            <th>GoogleID</th>
            <th>Bestfive</th>
          </tr>
        </thead>
        <tbody>
          {listContent.map(item => {
            const place = item.places[0];
            return (
              <tr
                key={item.docID}
                onClick={() => {
                  setPlaceSelected(item);
                }}>
                <td>
                  <h5>{place.name}</h5>
                  <span className='subtitle'>{item.category}</span>
                </td>
                <td>{place.googleID}</td>
                <td className='bestfive-list'>
                  {place.bestfive === 'yes' ? (
                    <img src={YesIcon} alt='yes icon' />
                  ) : (
                    <img src={NotIcon} alt='no icon' />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlaceList;
