import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

import { Link } from 'react-router-dom';

import YesIcon from '../../assets/icon-done.png'
import NotIcon from '../../assets/not-icon.png'

import './dashboard.styles.scss'

import Navbar from '../../components/Navbar/navbar.component';

import BarHopp from '../../assets/category/BarHopp.png'
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
import MoneyIcon from '../../assets/icon-money.png'


const Dashboard = () => {

  const [tdContent, setTdContent] = useState([])
  const [placeSelected, setPlaceSelected] = useState([])

  const lat = placeSelected && placeSelected.position ? placeSelected.position.lat : null;
  const lng = placeSelected && placeSelected.position ? placeSelected.position.lng : null;
  const week = placeSelected && placeSelected.openingHours ? placeSelected.openingHours : null;

  function checkData(item) {
    return item ? item : '-'
  }

  const priceIcon = () => {
    console.log("price")
    switch (placeSelected.price) {
      case "1":
        return (
          <div>
            <img src={MoneyIcon} alt="icon money" />
            <img src={MoneyIcon} alt="icon money" className="oapcity" />
            <img src={MoneyIcon} alt="icon money" className="oapcity" />
          </div>
        )
      case "2":
        return (
          <div>
            <img src={MoneyIcon} alt="icon money" />
            <img src={MoneyIcon} alt="icon money" />
            <img src={MoneyIcon} alt="icon money" className="oapcity" />
          </div>
        )
      case "3":
        return (
          <div>
            <img src={MoneyIcon} alt="icon money" />
            <img src={MoneyIcon} alt="icon money" />
            <img src={MoneyIcon} alt="icon money" />
          </div>
        )
      default:
        return (
          <p>-</p>
        )
    }
  }

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

      <div className="component-title">
        <h1>Place Details</h1>
      </div>
      <div className="place-details-container">
        <div className="place-card main-info">
          <div className="category">
            <div className="category-icon">
              <img src={NoImage} alt="no icon" />
            </div>
            <p>{checkData(placeSelected.category)}</p>
          </div>
          <div className="name">
            <p>{checkData(placeSelected.name)}</p>
          </div>
          <div className="border-line"></div>
          <div className="google-id">
            <p>{checkData(placeSelected.googleID)}</p>
          </div>
          <div className="bestfive">
            <p>
              {
                placeSelected.bestfive === 'yes' ?
                  <img src={YesIcon} alt="yes icon" />
                  :
                  <img src={NotIcon} alt="no icon" />
              }
            </p>
          </div>
          <div className="website">
            <p>tapasbar.com</p>
          </div>
          <div className="phone">
            <p>+34 688 544 45</p>
          </div>
          <div className="edit">
            <p>edit</p>
          </div>
        </div>
        <div className="place-card images">
          <div className="edit">
            <p>edit</p>
          </div>
          <div className="image">
            <p>No Image Available</p>
          </div>
        </div>
        <div className="place-card secondary-info">
          <div className="price">
            <p></p>
            {priceIcon()}
          </div>
          <div className="position">
            <div className="lat">
              <p>
                Lt - {checkData(lat)}
              </p>
            </div>
            <div className="lng">
              <p>
                Lg - {checkData(lng)}
              </p>
            </div>
          </div>
          <div className="border-line"></div>
          <div className="opening-hours">
            {
              week ?
                (
                  <div className="hours">
                    <div className="row-hours">
                      <h5>Mon</h5>
                      <p>{week.mon.open} - {week.mon.close}</p>
                    </div>
                    <div className="row-hours">
                      <h5>Tue</h5>
                      <p>{week.tue.open} - {week.tue.close}</p>
                    </div>
                    <div className="row-hours">
                      <h5>Wed</h5>
                      <p>{week.wed.open} - {week.wed.close}</p>
                    </div>
                    <div className="row-hours">
                      <h5>Thu</h5>
                      <p>{week.thu.open} - {week.thu.close}</p>
                    </div>
                    <div className="row-hours">
                      <h5>Fri</h5>
                      <p>{week.fri.open} - {week.fri.close}</p>
                    </div>
                    <div className="row-hours">
                      <h5>Sat</h5>
                      <p>{week.sat.open} - {week.sat.close}</p>
                    </div>
                    <div className="row-hours">
                      <h5>Sun</h5>
                      <p>{week.sun.open} - {week.sun.close}</p>
                    </div>
                  </div>
                ) :
                (
                  <div className="hours">
                    <div className="row-hours">
                      <h5>Mon</h5>
                      <p>- -</p>
                    </div>
                    <div className="row-hours">
                      <h5>Tue</h5>
                      <p>- -</p>
                    </div>
                    <div className="row-hours">
                      <h5>Wed</h5>
                      <p>- -</p>
                    </div>
                    <div className="row-hours">
                      <h5>Thu</h5>
                      <p>- -</p>
                    </div>
                    <div className="row-hours">
                      <h5>Fri</h5>
                      <p>- -</p>
                    </div>
                    <div className="row-hours">
                      <h5>Sat</h5>
                      <p>- -</p>
                    </div>
                    <div className="row-hours">
                      <h5>Sun</h5>
                      <p>- -</p>
                    </div>
                  </div>
                )
            }
          </div>
          <div className="edit">
            <p>edit</p>
          </div>
        </div>
        <div className="place-card description">
          <div className="edit">
            <p>edit</p>
          </div>
          <div className="text">
            {
              placeSelected.description ?
                <p>{placeSelected.description}</p> :
                <p className="defualt-description">Please write a description</p>
            }
          </div>
        </div>
      </div>

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