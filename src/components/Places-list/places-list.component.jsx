import React, { useState } from 'react';
import firebase from '../../firebase/firebase';

import './places-list.styles.scss';

import Modal from '../Modal/modal.component';

import YesIcon from '../../assets/icon-done.png';
import NotIcon from '../../assets/not-icon.png';
import DeleteIcon from '../../assets/icons/delete.png';
import EditIcon from '../../assets/icons/edit.png';
import ViewMore from '../../assets/icons/view-more.png';

const PlaceList = ({
  listContent,
  setPlaceSelected,
  toggleEditPlace,
  setToggleEditPlace
}) => {
  const [toggleModalActions, setToggleModalActions] = useState(false);
  const [toggleModalSuccess, setToggleModalSuccess] = useState(false);
  const [placeToDelete, setPlaceToDelete] = useState();

  const deletePrompt = place => {
    setPlaceToDelete(place);
    setToggleModalActions(!toggleModalActions);
  };

  const deletePlace = place => {
    firebase
      .firestore()
      .collection('places')
      .doc(place.docID)
      .delete()
      .then(() => {
        setToggleModalActions(!toggleModalActions);
        setToggleModalSuccess(!toggleModalSuccess);
        console.log(`${place.name} successfully deleted`);
      })
      .catch(error => console.error('Error removing document: ', error));
  };

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listContent.map(place => {
            return (
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
            );
          })}
        </tbody>
      </table>
      {toggleModalActions ? (
        <Modal
          isActions
          deletePlace={deletePlace}
          placeToDelete={placeToDelete}
          setToggleModalActions={setToggleModalActions}
          toggleModalActions={toggleModalActions}
        />
      ) : toggleModalSuccess ? (
        <Modal
          isSuccess
          setToggleModalSuccess={setToggleModalSuccess}
          toggleModalSuccess={toggleModalSuccess}
        />
      ) : null}
    </div>
  );
};

export default PlaceList;
