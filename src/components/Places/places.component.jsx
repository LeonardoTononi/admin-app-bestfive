import React from 'react';

import YesIcon from '../../assets/icon-done.png';
import NotIcon from '../../assets/not-icon.png';
import DeleteIcon from '../../assets/icons/delete.png';
import EditIcon from '../../assets/icons/edit.png';
import ViewMore from '../../assets/icons/view-more.png';

const Places = ({
  currentPlaces,
  setPlaceSelected,
  toggleEditPlace,
  setToggleEditPlace,
  deletePrompt
}) => (
  <tbody>
    {currentPlaces.map(place => (
      <tr key={place.docID}>
        <td>
          <h5>{place.name}</h5>
          <span className='subtitle'>{place.category}</span>
        </td>
        <td>{place.googleID}</td>
        <td className='bestfive-list'>
          {place.bestfive === 'yes' ? (
            <img src={YesIcon} alt='yes icon' />
          ) : (
            <img src={NotIcon} alt='no icon' />
          )}
        </td>
        <td className='row-actions'>
          <div
            className='edit'
            onClick={() =>
              setToggleEditPlace({
                toggle: !toggleEditPlace.toggle,
                place: place
              })
            }>
            <img src={EditIcon} alt='' />
          </div>
          <div className='delete' onClick={() => deletePrompt(place)}>
            <img src={DeleteIcon} alt='' />
          </div>
          <div
            className='view-more'
            onClick={() => {
              setPlaceSelected(place);
            }}>
            <img src={ViewMore} alt='' />
          </div>
        </td>
      </tr>
    ))}
  </tbody>
);

export default Places;
