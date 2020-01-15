import React, { useState, useEffect } from 'react';

import firebase from '../../firebase/firebase';

import './places-table.styles.scss';

import Modal from '../Modal/modal.component';
import Places from '../Places/places.component';
import Pagination from '../Pagination/pagination.component';
import Filters from '../Filters/filters.component';

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
  // Get current places
  const [toggleFilter, setToggleFilter] = useState(false);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = toggleFilter
    ? filteredPlaces.slice(indexOfFirstPlace, indexOfLastPlace)
    : listContent.slice(indexOfFirstPlace, indexOfLastPlace);

  const [category, setCategory] = useState([]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    firebase
      .firestore()
      .collection('category')
      .onSnapshot(snapshot => {
        const cat = snapshot.docs.map(doc => ({
          docID: doc.id,
          ...doc.data()
        }));
        setCategory(cat);
      });
  }, []);

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
      <Filters
        category={category}
        currentPlaces={currentPlaces}
        setToggleFilter={setToggleFilter}
        toggleFilter={toggleFilter}
        setFilteredPlaces={setFilteredPlaces}
      />
      <table className='table-content'>
        <thead>
          <tr>
            <th>Name</th>
            <th>GoogleID</th>
            <th className='text-center'>Bestfive</th>
            <th id='space-left'>Actions</th>
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
