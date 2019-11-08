import React from 'react'
import useForm from 'react-hook-form'
import { Link } from 'react-router-dom';
import firebase from '../../firebase'

import './add-place.styles.scss'

const AddPlace = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const { name, googleID, category, price, bestfive, lat, lng, mondayOpen, mondayClose, tuesdayOpen, tuesdayClose, wednesdayOpen, wednesdayClose, thursdayOpen, thursdayClose, fridayOpen, fridayClose, saturdayOpen, saturdayClose, sundayOpen, sundayClose } = data;
    firebase.firestore().collection('places').add({
      name,
      googleID,
      category,
      price,
      bestfive,
      position: { lat, lng },
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
      <h1>Add places form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <label>Name</label>
          <input
            ref={register}
            label="Name"
            name="name"
            type="text"
            id="name"
          />
        </div>
        <div className="row">
          <label>GoogleID</label>
          <input
            ref={register}
            label="GoogleID"
            name="googleID"
            type="text"
            id="googleID"
          />
        </div>
        <div className="row">
          <label>Category</label>
          <input
            ref={register}
            label="Category"
            name="category"
            type="text"
            id="category"
          />
        </div>
        <div className="row">
          <label>Price</label>
          <select name="price" ref={register}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="row">
          <label>Bestfive</label>
          <select name="bestfive" ref={register}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <div className="row">
          <h5>Position</h5>
          <label>Latitude</label>
          <input
            ref={register}
            label="Latitude"
            name="lat"
            type="number"
            id="lat"
            step=".000000000000001"
          />
          <label>Longitude</label>
          <input
            ref={register}
            label="Longitude"
            name="lng"
            type="number"
            id="lng"
            step=".000000000000001"
          />
        </div>
        {/*  <div className="row">
          <h5>Tag</h5>
          <p className="show-tag">+</p>
          <div className="tag-container" >
            <input ref={register} type="radio" name="food" value="food" id="food" /> Food <br />
            <input ref={register} type="radio" name="tapas" value="tapas" id="tapas" /> Tapas <br />
            <input ref={register} type="radio" name="pizza" value="pizza" id="pizza" /> Pizza <br />
            <input ref={register} type="radio" name="clothes" value="clothes" id="clothes" /> Clothes <br />
            <input ref={register} type="radio" name="vintage" value="vintage" id="vintage" /> Vintage <br />
            <input ref={register} type="radio" name="beach" value="beach" id="beach" /> Beach <br />
            <input ref={register} type="radio" name="pasta" value="pasta" id="pasta" /> Pasta <br />
            <input ref={register} type="radio" name="cake" value="cake" id="cake" /> Cake <br />
            <input ref={register} type="radio" name="delicious" value="delicious" id="delicious" /> Delicious <br />
            <input ref={register} type="radio" name="drink" value="drink" id="drink" /> Drink <br />
            <input ref={register} type="radio" name="fun" value="fun" id="fun" /> Fun <br />
            <input ref={register} type="radio" name="colutre" value="colture" id="colture" /> Colture <br />
          </div>
        </div> */}
        <h5>Opening Hours</h5>
        <div className="row">
          <label>Monday</label>
          <input name="mondayOpen"
            ref={register}
            type="time"
            id="mondayOpen"
            min="00:00"
            max="23:59" ></input>
          <input name="mondayClose"
            ref={register}
            type="time"
            id="mondayClose"
            min="00:00"
            max="23:59" ></input>
        </div>
        <div className="row">
          <label>Tuesday</label>
          <input name="tuesdayOpen"
            ref={register}
            type="time"
            id="tuesdayOpen"
            min="00:00"
            max="23:59" ></input>
          <input name="tuesdayClose"
            ref={register}
            type="time"
            id="tuesdayClose"
            min="00:00"
            max="23:59" ></input>
        </div>
        <div className="row">
          <label>Wednesday</label>
          <input name="wednesdayOpen"
            ref={register}
            type="time"
            id="wednesdayOpen"
            min="00:00"
            max="23:59" ></input>
          <input name="wednesdayClose"
            ref={register}
            type="time"
            id="wednesdayClose"
            min="00:00"
            max="23:59" ></input>
        </div>
        <div className="row">
          <label>Thursday</label>
          <input name="thursdayOpen"
            ref={register}
            type="time"
            id="thursdayOpen"
            min="00:00"
            max="23:59" ></input>
          <input name="thursdayClose"
            ref={register}
            type="time"
            id="thursdayClose"
            min="00:00"
            max="23:59" ></input>
        </div>
        <div className="row">
          <label>Friday</label>
          <input name="fridayOpen"
            ref={register}
            type="time"
            id="fridayOpen"
            min="00:00"
            max="23:59" ></input>
          <input name="fridayClose"
            ref={register}
            type="time"
            id="fridayClose"
            min="00:00"
            max="23:59" ></input>
        </div>
        <div className="row">
          <label>Saturday</label>
          <input name="saturdayOpen"
            ref={register}
            type="time"
            id="saturdayOpen"
            min="00:00"
            max="23:59" ></input>
          <input name="saturdayClose"
            ref={register}
            type="time"
            id="saturdayClose"
            min="00:00"
            max="23:59" ></input>
        </div>
        <div className="row">
          <label>Sunday</label>
          <input name="sundayOpen"
            ref={register}
            type="time"
            id="sundayOpen"
            min="00:00"
            max="23:59" ></input>
          <input name="sundayClose"
            ref={register}
            type="time"
            id="sundayClose"
            min="00:00"
            max="23:59" ></input>
        </div>
        <input type="submit" />
        <Link to="/database"><button>Go to DB</button></Link>
      </form>
    </div>
  )
}

export default AddPlace

