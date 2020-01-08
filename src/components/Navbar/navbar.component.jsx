import React from 'react';
import firebase from '../../firebase/firebase';
import { Link } from 'react-router-dom';

import AddPlaceIcon from '../../assets/navbar/add-place.png';
import DashboardIcon from '../../assets/navbar/dashboard.png';
import FaqIcon from '../../assets/navbar/faq.png';
import FiveHand from '../../assets/violetHand.png';
import LogOut from '../../assets/icons/logout.png';
import './navbar.styles.scss';

const Navbar = ({
  toggleAddPlace,
  setToggleAddPlace,
  toggleEditPlace,
  setToggleEditPlace,
  setPlaceSelected
}) => {
  return (
    <div className='navbar-container'>
      <ul>
        <li className='logo'>
          <Link to='/dashboard'>
            <div className='icon'></div>
            <img src={FiveHand} alt='hand five' />
          </Link>
        </li>
        <li className='dashboard-nav'>
          <Link
            to='/dashboard'
            onClick={() => {
              setToggleAddPlace(false);
              setToggleEditPlace({
                toggle: false,
                place: ''
              });
              setPlaceSelected(null);
            }}>
            <div className='icon'>
              <img src={DashboardIcon} alt='dashboard icon' />
            </div>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className='add-place-nav'>
          <Link
            to='/dashboard'
            onClick={() => {
              setToggleAddPlace(!toggleAddPlace);
              setToggleEditPlace({
                toggle: false,
                place: ''
              });
            }}>
            <div className='icon'>
              <img src={AddPlaceIcon} alt='add place icon' />
            </div>
            <p>Add Place</p>
          </Link>
        </li>
        <li className='faq-nav'>
          <Link to='/'>
            <div className='icon'>
              <img src={FaqIcon} alt='q & a icon' />
            </div>
            <p>FAQ</p>
          </Link>
        </li>
        <li className='logout' onClick={() => firebase.auth().signOut()}>
          <div className='icon'></div>
          <img src={LogOut} alt='' />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
