import React, { useState, useEffect } from 'react'
import useForm from 'react-hook-form'
import { Link } from 'react-router-dom';
import firebase from '../../firebase'

import PlaceDetails from '../../components/Place-details/place-details.component'
import Navbar from '../../components/Navbar/navbar.component';

import './add-place.styles.scss'

const AddPlace = ({ match }) => {

  const [category, setCategory] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('category')
      .onSnapshot(snapshot => {
        const cat = snapshot.docs.map(doc => ({
          docID: doc.id,
          ...doc.data()
        }))
        setCategory(cat)
      })
  }, [])

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const { name, googleID, category, price, bestfive, description, lat, lng, mondayOpen, mondayClose, tuesdayOpen, tuesdayClose, wednesdayOpen, wednesdayClose, thursdayOpen, thursdayClose, fridayOpen, fridayClose, saturdayOpen, saturdayClose, sundayOpen, sundayClose, img1, img2, img3, img4, img5 } = data;
    firebase.firestore().collection('places').add({
      name,
      googleID,
      category,
      price,
      bestfive,
      imageLink: { img1, img2, img3, img4, img5 },
      position: { lat, lng },
      description,
      openingHours: {
        mon: {
          open: mondayOpen,
          close: mondayClose
        },
        tue: {
          open: tuesdayOpen,
          close: tuesdayClose
        },
        wed: {
          open: wednesdayOpen,
          close: wednesdayClose
        },
        thu: {
          open: thursdayOpen,
          close: thursdayClose
        },
        fri: {
          open: fridayOpen,
          close: fridayClose
        },
        sat: {
          open: saturdayOpen,
          close: saturdayClose
        },
        sun: {
          open: sundayOpen,
          close: sundayClose
        }
      }
    })
  }

  return (

    <div className="container">
      <Navbar />
      <div className="component-title">
        <h1>Add New Place</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PlaceDetails match={match} category={category} register={register} />
        <button className="submit" type="submit">ADD PLACE</button>
      </form>

    </div>
  )
}

export default AddPlace

