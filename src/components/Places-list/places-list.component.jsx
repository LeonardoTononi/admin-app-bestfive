import React, { useState, useEffect } from 'react'

import firebase from '../../firebase'

import './places-list.styles.scss'

const PlacesList = () => {

  const [tdContent, setTdContent] = useState([])

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
    <div className="table-container">
      <table className="table-content">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Bestfive</th>
            <th>Price</th>
            <th>Position</th>
            <th>OpeningHours</th>
            <th>GoogleID</th>
          </tr>
        </thead>
        <tbody>
          {
            tdContent.map(item => {
              const h = item.openingHours;
              return (
                <tr key={item.docID} >
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.bestfive}</td>
                  <td>{item.price}</td>
                  <td>lt. {item.position.lat}  <br /> lg. {item.position.lng}</td>
                  <td className="td-hours">
                    <img src="https://img.icons8.com/office/16/000000/mouse.png" alt="mouse icon" />
                    <div className="opening-hours">
                      <h5>Mon</h5>
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
                      <p>{h.sun.open} - {h.sun.close}</p>
                    </div>
                  </td>
                  <td>{item.googleID}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default PlacesList

