import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

import { Link } from 'react-router-dom';

import YesIcon from '../../assets/icon-done.png';
import NotIcon from '../../assets/not-icon.png';

import './dashboard.styles.scss';

import PlaceDetails from '../../components/Place-details/place-details.component';
import Navbar from '../../components/Navbar/navbar.component';
import PlaceList from '../../components/Places-list/places-list.component';
import AddPlace from '../../components/Add-place/add-place.component';

/* import BarHopp from '../../assets/category/BarHopp.png'
import Beach from '../../assets/category/Beach.png'
import Church from '../../assets/category/Church.png'
import Churros from '../../assets/category/Churros.png'
import Coffee from '../../assets/category/Coffee.png'
import DayMenu from '../../assets/category/DayMenu.png'
import DayTrip from '../../assets/category/DayTrip.png'
import IceCream from '../../assets/category/IceCream.png'
import Italian from '../../assets/category/Italian.png'
import LocalTapas from '../../assets/category/LocalTapas.png'
import Museum from '../../assets/category/Museum.png'
import Paella from '../../assets/category/Paella.png'
import Shopping from '../../assets/category/Shopping.png'
import Terrace from '../../assets/category/Terrace.png'
import Vegan from '../../assets/category/Vegan.png'
import WowTapas from '../../assets/category/WowTapas.png'
import NoImage from '../../assets/no-image.png'
import MoneyIcon from '../../assets/icon-money.png' */

const Dashboard = ({ match }) => {
  const [listContent, setListContent] = useState([]);
  const [placeSelected, setPlaceSelected] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [toggleAddPlace, setToggleAddPlace] = useState(false);

  useEffect(() => {
    firebase
      .firestore()
      .collection('collections')
      .onSnapshot(snapshot => {
        const newListContent = snapshot.docs.map(doc => ({
          docID: doc.id,
          ...doc.data()
        }));
        setListContent(newListContent);
      });
  }, []);

  /*  useEffect(() => placeSelected ? displayImageFromStorage() : console.log("Select a Place inside the list!")) */

  /* const displayImageFromStorage = () => {
    const listRef = storage.ref(`places/${placeSelected.category}/${placeSelected.name}/`);
    listRef.listAll().then(function (res) {
      res.items.forEach(function (itemRef) {
        // All the items under listRef, set url to state
        itemRef.getDownloadURL().then(url => console.log(url))
      });
    }).catch(function (error) {
      // Uh-oh, an error occurred!
    });
  } */

  /* const displayImageFromStorage = () => {
    const storageRef = storage.ref();
    const ref = storageRef.child(`places/${placeSelected.category}/${placeSelected.name}/benzina2.png`);
    ref.getDownloadURL().then(function (url) {
      // setImageUrl(url)
      firebase.firestore().collection('places').where("name", "==", placeSelected.name)
        .get()
        .then(snapShot => snapShot.forEach(doc => {
          firebase.firestore().collection('places').doc(doc.id)
            .update({
              imageLinks: {
                img_1: url
              }
            })
            .then(snapshot => console.log(snapshot))
        }))
    })
  } */

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
