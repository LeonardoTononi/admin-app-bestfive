import React from 'react'
import { Link } from 'react-router-dom';

import './dashboard.styles.scss'

import PlacesList from '../../components/Places-list/places-list.component'

const Dashboard = () => {
  return (
    <div>
      <h1 className="title"><span role="img" aria-label="floppy">💾</span> Dashboard</h1>
      <Link to="/add-place"><button>Add Place</button></Link>
      <PlacesList />
    </div>
  )
}

export default Dashboard