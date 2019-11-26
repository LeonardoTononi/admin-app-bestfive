import React from 'react'
import { Link } from 'react-router-dom';

import './dashboard.styles.scss'

import PlacesList from '../../components/Places-list/places-list.component'
import PlaceDetails from '../../components/Place-details/place-details.component'
import Navbar from '../../components/Navbar/navbar.component';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h1 className="title"><span role="img" aria-label="floppy">💾</span> Dashboard</h1>
      <Link to="/add-place"><button>Add Place</button></Link>
      <PlaceDetails />
      <PlacesList />
    </div>
  )
}

export default Dashboard