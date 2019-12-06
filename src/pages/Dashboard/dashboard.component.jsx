import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

import { Link } from 'react-router-dom';

import YesIcon from '../../assets/icon-done.png'
import NotIcon from '../../assets/not-icon.png'

import './dashboard.styles.scss'

import PlaceDetails from '../../components/Place-details/place-details.component'
import Navbar from '../../components/Navbar/navbar.component';

/* import BarHopp from '../../assets/category/BarHopp.png'
import Beach from '../../assets/category/Beach.png'
import Church from '../../assets/category/Church.png'
import Churros from '../../assets/category/Churros.png'
import Coffee from '../../assets/category/Coffee.png'
import DayMenu from '../../assets/category/DayMenu.png'
import DayTrip from '../../assets/category/DayTrip.png'
import IceCream from '../../assets/category/IceCream.png'
import Italian from '../../assets/category/Italian.png'
import LocalTapas from '../../assets/category/LocalTapas.png'
import Museum from '../../assets/category/Museum.png'
import Paella from '../../assets/category/Paella.png'
import Shopping from '../../assets/category/Shopping.png'
import Terrace from '../../assets/category/Terrace.png'
import Vegan from '../../assets/category/Vegan.png'
import WowTapas from '../../assets/category/WowTapas.png'
import NoImage from '../../assets/no-image.png'
import MoneyIcon from '../../assets/icon-money.png' */


const Dashboard = () => {

  const [tdContent, setTdContent] = useState([])
  const [placeSelected, setPlaceSelected] = useState([])

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
      });

  }, []);

  console.log(placeSelected.price)


  return (
    <div>
      <Navbar />

      <PlaceDetails placeSelected={placeSelected} />

      <div className="component-title">
        <h1>Place List</h1>
      </div>

      <div className="table-container">
        <div className="search">
          <label>Search</label>
          <input type="text" />
        </div>
        <table className="table-content">
          <thead>
            <tr>
              <th>Name</th>
              <th>GoogleID</th>
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
                    <td>
                      <h5>{item.name}</h5>
                      <span className="subtitle">{item.category}</span>
                    </td>
                    <td>{item.googleID}</td>
                    <td className="bestfive-list">
                      {
                        item.bestfive === 'yes' ?
                          <img src={YesIcon} alt="yes icon" />
                          :
                          <img src={NotIcon} alt="no icon" />
                      }
                    </td>
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