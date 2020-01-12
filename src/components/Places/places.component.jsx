import React, { useState, useEffect } from 'react';

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
}) => {
  const [scrollIsVisible, setScrollIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', function(e) {
      toggleVisibility();
    });
  });

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setScrollIsVisible(true);
    } else {
      setScrollIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
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
              onClick={() => {
                setToggleEditPlace({
                  toggle: true,
                  place: place
                });
                scrollToTop();
              }}>
              <img src={EditIcon} alt='' />
              <span>Edit</span>
            </div>
            <div className='delete' onClick={() => deletePrompt(place)}>
              <img src={DeleteIcon} alt='' />
              <span>Delete</span>
            </div>
            <div
              className='view-more'
              onClick={() => {
                setPlaceSelected(place);
                scrollToTop();
                setToggleEditPlace({
                  toggle: false,
                  place: place
                });
              }}>
              <img src={ViewMore} alt='' />
              <span>Details</span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Places;
