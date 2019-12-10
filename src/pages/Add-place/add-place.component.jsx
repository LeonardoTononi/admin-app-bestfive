import React, { useState, useEffect } from 'react'
import useForm from 'react-hook-form'
import { Link } from 'react-router-dom';
import firebase from '../../firebase'

import PlaceDetails from '../../components/Place-details/place-details.component'
import Navbar from '../../components/Navbar/navbar.component';

import SuccessIcon from '../../assets/success.png'

import './add-place.styles.scss'

const AddPlace = ({ match }) => {

  const [category, setCategory] = useState([])
  const [successMessage, setSuccessMessage] = useState(false)

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
  const { register, handleSubmit } = useForm({
  });

  const onSubmit = (data, e) => {
    const { name, googleID, category, price, bestfive, description, lat, lng, mondayOpen, mondayClose, tuesdayOpen, tuesdayClose, wednesdayOpen, wednesdayClose, thursdayOpen, thursdayClose, fridayOpen, fridayClose, saturdayOpen, saturdayClose, sundayOpen, sundayClose } = data;
    firebase.firestore().collection('places').add({
      name,
      googleID,
      category,
      price,
      bestfive,
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
      .then(() => {
        setSuccessMessage(true)
        console.log("Place added successfully!");
        setTimeout(() => {
          e.target.reset();
          setSuccessMessage(false);
        }, 2000)
      })
      .catch((err) => {
        console.log(`ERROR: the error is: ${err} `)
      })
  }

  return (

    <div className="container">
      <Navbar />
      <div className="component-title">
        <h1>Add New Place</h1>
        {
          successMessage ?
            <div className="success-message">
              <img src={SuccessIcon} alt="success icon" />
              <p> Place addded successfully!</p>
            </div>
            :
            null
        }
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <PlaceDetails match={match} category={category} register={register} />
        <div className="add-place-button">
          <button className="submit" type="submit">Add Now</button>
        </div>
      </form>

    </div>
  )
}

export default AddPlace

