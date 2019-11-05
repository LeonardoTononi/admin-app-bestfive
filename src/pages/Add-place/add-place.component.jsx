import React from 'react'
import './add-place.styles.scss'

import FormInput from '../../components/FormInput/form-input.component'

const AddPlace = () => {

  return (
    <div className="container">
      <h1>Add places form</h1>
      <FormInput
        label="Name"
        name="name"
        type="text"
        id="name"
      />
      <FormInput
        label="GoogleID"
        name="googleID"
        type="text"
        id="googleID"
      />
      <FormInput
        label="Category"
        name="category"
        type="text"
        id="category"
      />
      <div className="row">
        <label>Price</label>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="row">
        <label>Bestfive</label>
        <select>
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
      <h5>Position</h5>
      <FormInput
        label="Latitude"
        name="lat"
        type="number"
        id="lat"
        step=".000000000000001"
      />
      <FormInput
        label="Longitude"
        name="lng"
        type="number"
        id="lng"
        step=".000000000000001"
      />
      <div className="row">
        <h5>Tag</h5>
        <p className="show-tag">+</p>
        <div className="tag-container" >
          <input type="radio" name="food" value="food" id="food" /> Food <br />
          <input type="radio" name="tapas" value="tapas" id="tapas" /> Tapas <br />
          <input type="radio" name="pizza" value="pizza" id="pizza" /> Pizza <br />
          <input type="radio" name="clothes" value="clothes" id="clothes" /> Clothes <br />
          <input type="radio" name="vintage" value="vintage" id="vintage" /> Vintage <br />
          <input type="radio" name="beach" value="beach" id="beach" /> Beach <br />
          <input type="radio" name="pasta" value="pasta" id="pasta" /> Pasta <br />
          <input type="radio" name="cake" value="cake" id="cake" /> Cake <br />
          <input type="radio" name="delicious" value="delicious" id="delicious" /> Delicious <br />
          <input type="radio" name="drink" value="drink" id="drink" /> Drink <br />
          <input type="radio" name="fun" value="fun" id="fun" /> Fun <br />
          <input type="radio" name="colutre" value="colture" id="colture" /> Colture <br />
        </div>
      </div>

      <h5>Opening Hours</h5>
      <div className="row">
        <label>Monday</label>
        <input name="mondayOpen"
          type="time"
          id="mondayOpen"
          min="00:00"
          max="23:59" ></input>
        <input name="mondayClose"
          type="time"
          id="mondayClose"
          min="00:00"
          max="23:59" ></input>
      </div>
      <div className="row">
        <label>Tuesday</label>
        <input name="tuesdayOpen"
          type="time"
          id="tuesdayOpen"
          min="00:00"
          max="23:59" ></input>
        <input name="tuesdayClose"
          type="time"
          id="tuesdayClose"
          min="00:00"
          max="23:59" ></input>
      </div>
      <div className="row">
        <label>Wednesday</label>
        <input name="wednesdayOpen"
          type="time"
          id="wednesdayOpen"
          min="00:00"
          max="23:59" ></input>
        <input name="wednesdayClose"
          type="time"
          id="wednesdayClose"
          min="00:00"
          max="23:59" ></input>
      </div>
      <div className="row">
        <label>Thursday</label>
        <input name="thursdayOpen"
          type="time"
          id="thursdayOpen"
          min="00:00"
          max="23:59" ></input>
        <input name="thursdayClose"
          type="time"
          id="thursdayClose"
          min="00:00"
          max="23:59" ></input>
      </div>
      <div className="row">
        <label>Friday</label>
        <input name="fridayOpen"
          type="time"
          id="fridayOpen"
          min="00:00"
          max="23:59" ></input>
        <input name="fridayClose"
          type="time"
          id="fridayClose"
          min="00:00"
          max="23:59" ></input>
      </div>
      <div className="row">
        <label>Saturday</label>
        <input name="saturdayOpen"
          type="time"
          id="saturdayOpen"
          min="00:00"
          max="23:59" ></input>
        <input name="saturdayClose"
          type="time"
          id="saturdayClose"
          min="00:00"
          max="23:59" ></input>
      </div>
      <div className="row">
        <label>Sunday</label>
        <input name="sundayOpen"
          type="time"
          id="sundayOpen"
          min="00:00"
          max="23:59" ></input>
        <input name="sundayClose"
          type="time"
          id="sundayClose"
          min="00:00"
          max="23:59" ></input>
      </div>

      <button>Submit</button>

    </div>
  )
}

export default AddPlace