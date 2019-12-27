import React from 'react';

import YesIcon from '../../assets/icon-done.png';
import NotIcon from '../../assets/not-icon.png';

const PlaceList = ({ tdContent, setPlaceSelected }) => {
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
          {tdContent.map(item => {
            return (
              <tr
                key={item.docID}
                onClick={() => {
                  setPlaceSelected(item);
                }}>
                <td>
                  <h5>{item.name}</h5>
                  <span className='subtitle'>{item.category}</span>
                </td>
                <td>{item.googleID}</td>
                <td className='bestfive-list'>
                  {item.bestfive === 'yes' ? (
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
