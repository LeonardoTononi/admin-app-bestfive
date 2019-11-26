import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="hamburger">
        <div className="icon">Bestfive Admin</div>
      </div>
      <div className="dashboard-nav">
        <div className="icon"></div>
        <h2>Dashboard</h2>
      </div>
      <div className="add-place-nav">
        <div className="icon"></div>
        <h2>Add Place</h2>
      </div>
      <div className="faq-nav">
        <div className="icon"></div>
        <h2>FAQ</h2>
      </div>
      <div className="expand-btn">
        <div className="icon"></div>
      </div>
    </div>
  )
}

export default Navbar