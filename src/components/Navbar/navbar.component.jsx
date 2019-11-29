import React from 'react'
import firebase from '../../firebase'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="hamburger">
        <div className="icon">Bestfive Admin</div>
      </div>
      <div className="dashboard-nav">
        <div className="icon"></div>
        <Link to="/dashboard"><h2>Dashboard</h2></Link>
      </div>
      <div className="add-place-nav">
        <div className="icon"></div>
        <Link to="/add-place"><h2>Add Place</h2></Link>
      </div>
      <div className="faq-nav">
        <div className="icon"></div>
        <h2>FAQ</h2>
      </div>
      <div className="logout">
        <div className="icon"></div>
        <button onClick={() => firebase.auth().signOut()} >Logout</button>
      </div>
      <div className="expand-btn">
        <div className="icon"></div>
      </div>
    </div>
  )
}

export default Navbar
