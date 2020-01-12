import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/firebase';

import './dashboard.styles.scss';

import PlaceDetails from '../../components/Place-details/place-details.component';
import Navbar from '../../components/Navbar/navbar.component';
import PlacesTable from '../../components/Places-table/places-table.component';
import AddPlace from '../../components/Add-place/add-place.component';

import SelectList from '../../assets/select-list.svg';

const Dashboard = ({ match }) => {
  const [listContent, setListContent] = useState([]);
  const [placeSelected, setPlaceSelected] = useState(null);
  const [toggleAddPlace, setToggleAddPlace] = useState(false);
  const [toggleEditPlace, setToggleEditPlace] = useState({
    toggle: false,
    place: []
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection('places')
      .onSnapshot(snapshot => {
        const newListContent = snapshot.docs.map(doc => ({
          docID: doc.id,
          ...doc.data()
        }));
        setListContent(newListContent);
      });
  }, []);

  return (
    <div>
      <Navbar
        toggleAddPlace={toggleAddPlace}
        setToggleAddPlace={setToggleAddPlace}
        toggleEditPlace={toggleEditPlace}
        setToggleEditPlace={setToggleEditPlace}
        setPlaceSelected={setPlaceSelected}
      />

      {toggleAddPlace ? (
        <AddPlace />
      ) : toggleEditPlace.toggle ? (
        <AddPlace
          toggleEditPlace={toggleEditPlace}
          setToggleEditPlace={setToggleEditPlace}
        />
      ) : placeSelected ? (
        <div>
          {' '}
          <div className='component-title'>
            <h1>Place Details</h1>
            <p className='title-description'>
              Refresh the page to unselect a place.
            </p>
          </div>
          <PlaceDetails placeSelected={placeSelected} match={match} />
        </div>
      ) : (
        <div>
          {' '}
          <div className='component-title'>
            <h1>Place Details</h1>
            <p className='title-description'>
              Select a place inside the place list if you want see more details
              about it.
            </p>
            <img src={SelectList} alt='' />
          </div>
        </div>
      )}

      <div className='component-title'>
        <h1>Place List</h1>
        <p className='title-description'>
          You can select, search for place name or category, use the filters or
          edit and delete a specific place from the database.
        </p>
      </div>
      <PlacesTable
        listContent={listContent}
        setListContent={setListContent}
        setPlaceSelected={setPlaceSelected}
        toggleEditPlace={toggleEditPlace}
        setToggleEditPlace={setToggleEditPlace}
      />
    </div>
  );
};

export default Dashboard;
