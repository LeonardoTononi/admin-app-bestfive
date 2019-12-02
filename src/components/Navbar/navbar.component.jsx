import React from 'react'
import { Link } from 'react-router-dom';
import AddPlaceIcon from '../../assets/navbar/add-place.png'
import DashboardIcon from '../../assets/navbar/dashboard.png'
import FaqIcon from '../../assets/navbar/faq.png'

import './navbar.styles.scss'

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="dashboard-nav">
        <Link to="/dashboard">
          <div className="icon">
            <img src={DashboardIcon} alt="dashboard icon" />
          </div>
          <p>Dashboard</p>
        </Link>
      </div>
      <div className="add-place-nav">
        <Link to="/add-place">
          <div className="icon">
            <img src={AddPlaceIcon} alt="add place icon" />
          </div>
          <p>Add Place</p>
        </Link>
      </div>
      <div className="faq-nav">
        <Link to="/">
          <div className="icon">
            <img src={FaqIcon} alt="q & a icon" />
          </div>
          <p>FAQ</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
