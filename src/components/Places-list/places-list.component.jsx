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
                <tr key={item.docID} >
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
  )
}

export default PlacesList

