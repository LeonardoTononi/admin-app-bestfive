import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/firebase';

import './dashboard.styles.scss';

import PlaceDetails from '../../components/Place-details/place-details.component';
import Navbar from '../../components/Navbar/navbar.component';
import PlaceList from '../../components/Places-list/places-list.component';
import AddPlace from '../../components/Add-place/add-place.component';

const Dashboard = ({ match }) => {
  const [listContent, setListContent] = useState([]);
  const [placeSelected, setPlaceSelected] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [toggleAddPlace, setToggleAddPlace] = useState(false);

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
      <Navbar setToggleAddPlace={setToggleAddPlace} />

      {toggleAddPlace ? (
        <AddPlace />
      ) : (
        <div>
          {' '}
          <div className='component-title'>
            <h1>Place Details</h1>
          </div>
          <PlaceDetails
            placeSelected={placeSelected}
            match={match}
            imageUrl={imageUrl}
          />
        </div>
      )}

      <div className='component-title'>
        <h1>Place List</h1>
      </div>
      <PlaceList
        listContent={listContent}
        setPlaceSelected={setPlaceSelected}
      />
    </div>
  );
};

export default Dashboard;
