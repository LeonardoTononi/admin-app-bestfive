import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

import { Link } from 'react-router-dom';

import './dashboard.styles.scss'

import Navbar from '../../components/Navbar/navbar.component';

const Dashboard = () => {

  const [tdContent, setTdContent] = useState([])
  const [placeSelected, setPlaceSelected] = useState([])

  const lat = placeSelected && placeSelected.position ? placeSelected.position.lat : null;
  const lng = placeSelected && placeSelected.position ? placeSelected.position.lng : null;
  const week = placeSelected && placeSelected.openingHours ? placeSelected.openingHours : null;

  useEffect(() => {
    firebase
      .firestore()
      .collection('places')
      .onSnapshot(snapshot => {
        const newTdContent = snapshot.docs.map(doc => ({
          docID: doc.id,
          ...doc.data()
        }))
        setTdContent(newTdContent)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <h1 className="title"><span role="img" aria-label="floppy">💾</span> Dashboard</h1>
      <Link to="/add-place"><button>Add Place</button></Link>

      <div className="place-details-container">
        <div className="place-card main-info">
          <div className="category">
            <p>{placeSelected.category}</p>
            <img src="" alt="" />
          </div>
          <div className="name">
            <h5>{placeSelected.name}</h5>
          </div>
          <div className="google-id">
            <p>{placeSelected.googleID}</p>
          </div>
          <div className="bestfive">
            <p>{placeSelected.bestfive}</p>
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
            <p>{placeSelected.price}</p>
          </div>
          <div className="position">
            <div className="lat">
              <p>
                {lat}
              </p>
            </div>
            <div className="lng">
              <p>{lng}</p>
            </div>
          </div>
          <div className="opening-hours">
            <h5>Mon</h5>
            <p>05:00 AM - 10:00 PM</p>
            {
              week ?
                (
                  <div>
                    <p>{week.mon.open} - {week.mon.close}</p>
                    <h5>Tue</h5>
                    <p>{week.tue.open} - {week.tue.close}</p>
                    <h5>Wed</h5>
                    <p>{week.wed.open} - {week.wed.close}</p>
                    <h5>Thu</h5>
                    <p>{week.thu.open} - {week.thu.close}</p>
                    <h5>Fri</h5>
                    <p>{week.fri.open} - {week.fri.close}</p>
                    <h5>Sat</h5>
                    <p>{week.sat.open} - {week.sat.close}</p>
                    <h5>Sun</h5>
                    <p>{week.sun.open} - {week.sun.close}</p>
                  </div>
                ) :
                null
            }
          </div>
        </div>
        <div className="place-card description">
          <p>{placeSelected.description}</p>
        </div>
      </div>

      <div className="table-container">
        <h2>Places List</h2>
        <div className="search">
          <label>Search</label>
          <input type="text" />
        </div>
        <table className="table-content">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Bestfive</th>
            </tr>
          </thead>
          <tbody>
            {
              tdContent.map(item => {
                return (
                  <tr key={item.docID} onClick={() => {
                    setPlaceSelected(item);
                  }}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.bestfive}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard