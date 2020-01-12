import React, { useState } from 'react';
import firebase from '../../firebase/firebase';

import './places-table.styles.scss';

import Modal from '../Modal/modal.component';
import Places from '../Places/places.component';
import Pagination from '../Pagination/pagination.component';

const PlacesTable = ({
  listContent,
  setListContent,
  setPlaceSelected,
  toggleEditPlace,
  setToggleEditPlace
}) => {
  const [toggleModalActions, setToggleModalActions] = useState(false);
  const [toggleModalSuccess, setToggleModalSuccess] = useState(false);
  const [placeToDelete, setPlaceToDelete] = useState();

  //Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage, setPlacesPerPage] = useState(5);
  // Get current posts
  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = listContent.slice(indexOfFirstPlace, indexOfLastPlace);

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
        <Places
          currentPlaces={currentPlaces}
          setPlaceSelected={setPlaceSelected}
          toggleEditPlace={toggleEditPlace}
          setToggleEditPlace={setToggleEditPlace}
          deletePrompt={deletePrompt}
        />
      </table>
      <Pagination
        placesPerPage={placesPerPage}
        totalPlaces={listContent.length}
        paginate={paginate}
        setPlacesPerPage={setPlacesPerPage}
      />
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

export default PlacesTable;
