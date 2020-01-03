import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/firebase';
import useForm from 'react-hook-form';

import NoImage from '../../assets/no-image.png';
import SuccessIcon from '../../assets/success.png';
import ImageGhost from '../../assets/image-ghost.svg';

import './add-place.styles.scss';

const AddPlace = () => {
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
      website,
      phone,
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

    firebase
      .firestore()
      .collection('places')
      .add({
        createdAt: new Date(),
        name,
        googleID,
        category,
        price,
        website,
        phone,
        bestfive,
        imageLink_1: '',
        imageLink_2: '',
        imageLink_3: '',
        imageLink_4: '',
        imageLink_5: '',
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

  return (
    <div className='container'>
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
        <div className='place-details-container'>
          <div className='place-card main-info'>
            <div className='category'>
              <div className='category-icon'>
                <img src={NoImage} alt='no icon' />
              </div>
              <p className='category-title'></p>
              <select
                multiple={false}
                ref={register({ required: true })}
                name='category'>
                {category.map(item => (
                  <option value={item.name} key={item.docID}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div></div>
            <div className='name'>
              <p className='name-title'></p>
              <input
                ref={register({ required: true })}
                name='name'
                type='text'
                id='name'
              />
            </div>
            <div className='border-line'></div>
            <div className='google-id'>
              <p className='googleID-title'></p>
              <input
                ref={register({ required: true })}
                name='googleID'
                type='text'
                id='googleID'
              />
            </div>
            <div className='bestfive'>
              <p className='bestfive-title'></p>
              <select
                multiple={false}
                name='bestfive'
                ref={register({ required: true })}>
                <option value='yes'>yes</option>
                <option value='no'>no</option>
              </select>
            </div>
            <div className='website'>
              <p className='website-title'></p>
              <input
                type='text'
                ref={register({ required: true })}
                id='website'
                name='website'
              />
            </div>
            <div className='phone'>
              <p className='phone-title'></p>
              <input
                type='text'
                ref={register({ required: true })}
                name='phone'
                id='phone'
              />
            </div>
            <div className='edit'>
              <p>edit</p>
            </div>
          </div>

          <div className='place-card place-images'>
            <img src={ImageGhost} alt='' />
          </div>
          <div className='place-card secondary-info'>
            <div className='price'>
              <p></p>

              <select
                multiple={false}
                name='price'
                ref={register({ required: true })}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </div>
            <div className='position'>
              <div className='lat'>
                <p>
                  Lt -{' '}
                  <input
                    ref={register({ required: true })}
                    name='lat'
                    type='number'
                    id='lat'
                    step='1.00'
                    min='0.0000001'
                  />
                </p>
              </div>
              <div className='lng'>
                <p>
                  Lg -{' '}
                  <input
                    ref={register({ required: true })}
                    name='lng'
                    type='number'
                    id='lng'
                    step='1.00'
                    min='0.0000001'
                  />
                </p>
              </div>
            </div>
            <div className='border-line'></div>
            <div className='opening-hours'>
              <div className='hours'>
                <div className='row-hours'>
                  <label>Monday</label>
                  <input
                    name='mondayOpen'
                    ref={register({ required: true })}
                    type='time'
                    id='mondayOpen'
                    min='00:00'
                    max='23:59'></input>
                  <input
                    name='mondayClose'
                    ref={register({ required: true })}
                    type='time'
                    id='mondayClose'
                    min='00:00'
                    max='23:59'></input>
                </div>
                <div className='row-hours'>
                  <label>Tuesday</label>
                  <input
                    name='tuesdayOpen'
                    ref={register({ required: true })}
                    type='time'
                    id='tuesdayOpen'
                    min='00:00'
                    max='23:59'></input>
                  <input
                    name='tuesdayClose'
                    ref={register({ required: true })}
                    type='time'
                    id='tuesdayClose'
                    min='00:00'
                    max='23:59'></input>
                </div>
                <div className='row-hours'>
                  <label>Wednesday</label>
                  <input
                    name='wednesdayOpen'
                    ref={register({ required: true })}
                    type='time'
                    id='wednesdayOpen'
                    min='00:00'
                    max='23:59'></input>
                  <input
                    name='wednesdayClose'
                    ref={register({ required: true })}
                    type='time'
                    id='wednesdayClose'
                    min='00:00'
                    max='23:59'></input>
                </div>
                <div className='row-hours'>
                  <label>Thursday</label>
                  <input
                    name='thursdayOpen'
                    ref={register({ required: true })}
                    type='time'
                    id='thursdayOpen'
                    min='00:00'
                    max='23:59'></input>
                  <input
                    name='thursdayClose'
                    ref={register({ required: true })}
                    type='time'
                    id='thursdayClose'
                    min='00:00'
                    max='23:59'></input>
                </div>
                <div className='row-hours'>
                  <label>Friday</label>
                  <input
                    name='fridayOpen'
                    ref={register({ required: true })}
                    type='time'
                    id='fridayOpen'
                    min='00:00'
                    max='23:59'></input>
                  <input
                    name='fridayClose'
                    ref={register({ required: true })}
                    type='time'
                    id='fridayClose'
                    min='00:00'
                    max='23:59'></input>
                </div>
                <div className='row-hours'>
                  <label>Saturday</label>
                  <input
                    name='saturdayOpen'
                    ref={register({ required: true })}
                    type='time'
                    id='saturdayOpen'
                    min='00:00'
                    max='23:59'></input>
                  <input
                    name='saturdayClose'
                    ref={register({ required: true })}
                    type='time'
                    id='saturdayClose'
                    min='00:00'
                    max='23:59'></input>
                </div>
                <div className='row-hours'>
                  <label>Sunday</label>
                  <input
                    name='sundayOpen'
                    ref={register({ required: true })}
                    type='time'
                    id='sundayOpen'
                    min='00:00'
                    max='23:59'></input>
                  <input
                    name='sundayClose'
                    ref={register({ required: true })}
                    type='time'
                    id='sundayClose'
                    min='00:00'
                    max='23:59'></input>
                </div>
              </div>
            </div>
          </div>
          <div className='place-card description'>
            <div className='text'>
              <textarea
                ref={register({ required: true })}
                name='description'
                id='description'
                cols='60'
                rows='20'></textarea>
            </div>
          </div>
        </div>
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
