import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';

import useForm from 'react-hook-form';

import PlaceDetails from '../Place-details/place-details.component';
import Navbar from '../Navbar/navbar.component';

import SuccessIcon from '../../assets/success.png';

import './add-place.styles.scss';

const AddPlace = ({ match }) => {
  const [category, setCategory] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

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

  const { register, handleSubmit } = useForm({});

  const onSubmit = (data, e) => {
    const {
      name,
      googleID,
      category,
      price,
      bestfive,
      description,
      lat,
      lng,
      mondayOpen,
      mondayClose,
      tuesdayOpen,
      tuesdayClose,
      wednesdayOpen,
      wednesdayClose,
      thursdayOpen,
      thursdayClose,
      fridayOpen,
      fridayClose,
      saturdayOpen,
      saturdayClose,
      sundayOpen,
      sundayClose
    } = data;

    // Cereare un oggetto di default per non inserire continuamente in input i file, cosi da fare testing piu rapidamente
    // devo creare una funzione per aggiungere se la categoria è gia presente
    // poi aggiornare la place list con la nuova struttura di file
    firebase
      .firestore()
      .collection('collections')
      .add({
        category: category,
        places: [
          {
            createdAt: new Date(),
            name,
            googleID,
            category,
            price,
            bestfive,
            imageLinks: {
              img_1: '',
              img_2: '',
              img_3: '',
              img_4: '',
              img_5: '',
              img_6: '',
              img_7: ''
            },
            position: new firebase.firestore.GeoPoint(3.000001, 4.000005),
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
          }
        ]
      })
      .then(() => {
        setSuccessMessage(true);
        console.log('Place added successfully!');
        setTimeout(() => {
          e.target.reset();
          setSuccessMessage(false);
        }, 1000);
      })
      .catch(err => {
        console.log(`ERROR: the error is: ${err} `);
      });
  };

  const trying = async () => {
    const collectionRef = firebase.firestore().collection('collections');
    const placesRef = firebase
      .firestore()
      .doc('collections/iwgPcw1AQcc8jxVPG6Mo');

    const snapshot = await placesRef.get();
    const collectionSnapshot = await collectionRef.get();
    console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });
  };

  useEffect(() => {
    trying();
  });

  return (
    <div className='container'>
      <Navbar />
      <div className='component-title'>
        <h1>Add New Place</h1>
        {successMessage ? (
          <div className='success-message'>
            <img src={SuccessIcon} alt='success icon' />
            <p> Place addded successfully!</p>
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <PlaceDetails match={match} category={category} register={register} />
        <div className='add-place-button'>
          <button className='submit' type='submit'>
            Add Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlace;
