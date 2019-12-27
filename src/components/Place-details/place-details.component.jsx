import React, { useState, useEffect } from 'react';

import './place-details.styles.scss';

import YesIcon from '../../assets/icon-done.png';
import NotIcon from '../../assets/not-icon.png';
import NoImage from '../../assets/no-image.png';
import MoneyIcon from '../../assets/icon-money.png';

const PlaceDetails = ({ placeSelected, imageUrl }) => {
  const place = placeSelected ? placeSelected.places[0] : '-';
  // Check if placeSelected property are present
  const lat = place && place.position ? place.position.lat : null;
  const lng = place && place.position ? place.position.lng : null;
  const week = place && place.openingHours ? place.openingHours : null;
  const images = place && place.imageLink ? place.imageLink : null;

  // Check if data is true
  function checkData(item) {
    return item ? item : '-';
  }

  // Assign to given price an icon
  const priceIcon = () => {
    switch (place.price) {
      case '1':
        return (
          <div>
            <img src={MoneyIcon} alt='icon money' />
            <img src={MoneyIcon} alt='icon money' className='oapcity' />
            <img src={MoneyIcon} alt='icon money' className='oapcity' />
          </div>
        );
      case '2':
        return (
          <div>
            <img src={MoneyIcon} alt='icon money' />
            <img src={MoneyIcon} alt='icon money' />
            <img src={MoneyIcon} alt='icon money' className='oapcity' />
          </div>
        );
      case '3':
        return (
          <div>
            <img src={MoneyIcon} alt='icon money' />
            <img src={MoneyIcon} alt='icon money' />
            <img src={MoneyIcon} alt='icon money' />
          </div>
        );
      default:
        return <p>-</p>;
    }
  };

  return (
    <div className='place-details-container'>
      <div className='place-card main-info'>
        <div className='category'>
          <div className='category-icon'>
            <img src={NoImage} alt='no icon' />
          </div>
          <p className='category-title'></p>
          <p>{checkData(place.category)}</p>
        </div>
        <div></div>
        <div className='name'>
          <p className='name-title'></p>
          <p>{checkData(place.name)}</p>
        </div>
        <div className='border-line'></div>
        <div className='google-id'>
          <p className='googleID-title'></p>
          <p>{checkData(place.googleID)}</p>
        </div>
        <div className='bestfive'>
          <p className='bestfive-title'></p>
          {place.bestfive === 'yes' ? (
            <img src={YesIcon} alt='yes icon' />
          ) : (
            <img src={NotIcon} alt='no icon' />
          )}
        </div>
        <div className='website'>
          <p className='website-title'></p>
          <p>tapas.com</p>
        </div>
        <div className='phone'>
          <p className='phone-title'></p>

          <p>+34 688 544 45</p>
        </div>
        <div className='edit'>
          <p>edit</p>
        </div>
      </div>
      <div className='place-card images'>
        <div className='image'>
          {images ? (
            <div className='slider'>
              <div className='slides'>
                <div id='slide-1'>
                  <img src={imageUrl} alt='' />
                </div>
              </div>
              <a href='#slide-1'>1</a>
              <a href='#slide-2'>2</a>
              <a href='#slide-3'>3</a>
              <a href='#slide-4'>4</a>
              <a href='#slide-5'>5</a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className='place-card secondary-info'>
        <div className='price'>
          <p></p>

          {priceIcon()}
        </div>
        <div className='position'>
          <div className='lat'>
            <p>Lt - {checkData(lat)}</p>
          </div>
          <div className='lng'>
            <p>Lg - {checkData(lng)}</p>
          </div>
        </div>
        <div className='border-line'></div>
        <div className='opening-hours'>
          {week ? (
            <div className='hours'>
              <div className='row-hours'>
                <h5>Mon</h5>
                <p>
                  {week.mon.open} - {week.mon.close}
                </p>
              </div>
              <div className='row-hours'>
                <h5>Tue</h5>
                <p>
                  {week.tue.open} - {week.tue.close}
                </p>
              </div>
              <div className='row-hours'>
                <h5>Wed</h5>
                <p>
                  {week.wed.open} - {week.wed.close}
                </p>
              </div>
              <div className='row-hours'>
                <h5>Thu</h5>
                <p>
                  {week.thu.open} - {week.thu.close}
                </p>
              </div>
              <div className='row-hours'>
                <h5>Fri</h5>
                <p>
                  {week.fri.open} - {week.fri.close}
                </p>
              </div>
              <div className='row-hours'>
                <h5>Sat</h5>
                <p>
                  {week.sat.open} - {week.sat.close}
                </p>
              </div>
              <div className='row-hours'>
                <h5>Sun</h5>
                <p>
                  {week.sun.open} - {week.sun.close}
                </p>
              </div>
            </div>
          ) : (
            <div className='hours'>
              <div className='row-hours'>
                <h5>Mon</h5>
                <p>- -</p>
              </div>
              <div className='row-hours'>
                <h5>Tue</h5>
                <p>- -</p>
              </div>
              <div className='row-hours'>
                <h5>Wed</h5>
                <p>- -</p>
              </div>
              <div className='row-hours'>
                <h5>Thu</h5>
                <p>- -</p>
              </div>
              <div className='row-hours'>
                <h5>Fri</h5>
                <p>- -</p>
              </div>
              <div className='row-hours'>
                <h5>Sat</h5>
                <p>- -</p>
              </div>
              <div className='row-hours'>
                <h5>Sun</h5>
                <p>- -</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='place-card description'>
        <div className='text'>
          {place.description ? (
            <p>{place.description}</p>
          ) : (
            <p className='defualt-description'>Please write a description</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
