import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

const PlaceDetails = () => {

  return (
    <div className="place-details-container">
      <div className="place-card main-info">
        <div className="category">
          <p>Category</p>
          <img src="" alt="" />
        </div>
        <div className="name">
          <h5>Name</h5>
        </div>
        <div className="google-id">
          <p>GoogleID</p>
        </div>
        <div className="bestfive">
          <p>YES / NO</p>
        </div>
        <div className="edit">
          <p>edit</p>
        </div>
      </div>
      <div className="place-card images">
        <img src="" alt="" />
        <div className="edit">
          <p>edit</p>
        </div>
      </div>
      <div className="place-card secondary-info">
        <div className="price">
          <p>Price</p>
        </div>
        <div className="position">
          <div className="lat">
            <p>Latitude</p>
          </div>
          <div className="lng">
            <p>Longitude</p>
          </div>
        </div>
        <div className="opening-hours">
          <h5>Mon</h5>
          <p>05:00 AM - 10:00 PM</p>
          {/* <h5>Mon</h5>
          <p>{h.mon.open} - {h.mon.close}</p>
          <h5>Tue</h5>
          <p>{h.tue.open} - {h.tue.close}</p>
          <h5>Wed</h5>
          <p>{h.wed.open} - {h.wed.close}</p>
          <h5>Thu</h5>
          <p>{h.thu.open} - {h.thu.close}</p>
          <h5>Fri</h5>
          <p>{h.fri.open} - {h.fri.close}</p>
          <h5>Sat</h5>
          <p>{h.sat.open} - {h.sat.close}</p>
          <h5>Sun</h5>
          <p>{h.sun.open} - {h.sun.close}</p> */}
        </div>
      </div>
      <div className="place-card description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veniam tempora magnam nostrum at. Eligendi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, tenetur.</p>
      </div>
    </div>
  )
}

export default PlaceDetails