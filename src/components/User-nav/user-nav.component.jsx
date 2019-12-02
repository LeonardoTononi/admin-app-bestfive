import React from 'react'
import firebase from '../../firebase'
import { Link } from 'react-router-dom';

import './user-nav.styles.scss'
import FiveHand from '../../assets/violetHand.png'

const UserNav = () => {

  return (
    <div className="user-nav-container">
      <div className="logo">
        <div className="icon"></div>
        <Link to="/dashboard"><img src={FiveHand} alt="hand five" />Bestfive</Link>
      </div>
      <div className="user">
        <div className="logout">
          <div className="icon"></div>
          <button onClick={() => firebase.auth().signOut()} >Logout</button>
        </div>
      </div>
    </div>
  )
}

export default UserNav
