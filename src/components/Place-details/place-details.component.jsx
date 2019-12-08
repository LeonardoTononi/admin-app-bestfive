import React from 'react'

import './place-details.styles.scss'

import YesIcon from '../../assets/icon-done.png'
import NotIcon from '../../assets/not-icon.png'
import NoImage from '../../assets/no-image.png'
import MoneyIcon from '../../assets/icon-money.png'

const PlaceDetails = ({ placeSelected, match, category, register }) => {

  const lat = placeSelected && placeSelected.position ? placeSelected.position.lat : null;
  const lng = placeSelected && placeSelected.position ? placeSelected.position.lng : null;
  const week = placeSelected && placeSelected.openingHours ? placeSelected.openingHours : null;

  const images = placeSelected && placeSelected.imageLink ? placeSelected.imageLink : null;

  function checkData(item) {
    return item ? item : '-'
  }

  const priceIcon = () => {
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

  return (
    <div className="place-details-container">
      <div className="place-card main-info">
        <div className="category">
          <div className="category-icon">
            <img src={NoImage} alt="no icon" />
          </div>
          <p className="category-title"></p>
          {
            match.path === '/dashboard'
              ?
              <p>{checkData(placeSelected.category)}</p>
              :
              match.path === '/add-place' ?
                <select ref={register({ required: true })} name="category">
                  {category.map(item => (
                    <option value={item.name} key={item.docID}>{item.name}</option>
                  ))}
                </select>
                :
                <select ref={register({ required: true })} name="category">
                  {category.map(item => (
                    <option value={item.name} key={item.docID}>{item.name}</option>
                  ))}
                </select>
          }
        </div>
        <div className="name">
          <p className="name-title"></p>
          {
            match.path === '/dashboard'
              ?
              <p>{checkData(placeSelected.name)}</p>
              :
              match.path === '/add-place' ?
                <input
                  ref={register({ required: true })}
                  name="name"
                  type="text"
                  id="name"
                />
                :
                <input
                  ref={register({ required: true })}
                  name="name"
                  type="text"
                  id="name"
                  value={placeSelected.name}
                />
          }

        </div>
        <div className="border-line"></div>
        <div className="google-id">
          <p className="googleID-title"></p>
          {
            match.path === '/dashboard'
              ?

              <p>{checkData(placeSelected.googleID)}</p>

              :
              match.path === '/add-place' ?
                <input
                  ref={register({ required: true })}
                  name="googleID"
                  type="text"
                  id="googleID"
                />
                :
                <input
                  ref={register({ required: true })}
                  name="googleID"
                  type="text"
                  id="googleID"
                  value={placeSelected.googleID}
                />
          }
        </div>
        <div className="bestfive">
          <p className="bestfive-title"></p>
          {
            match.path === '/dashboard'
              ?
              placeSelected.bestfive === 'yes' ?
                <img src={YesIcon} alt="yes icon" />
                :
                <img src={NotIcon} alt="no icon" />
              :
              match.path === '/add-place' ?
                <select name="bestfive" ref={register({ required: true })}>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
                :
                <select name="bestfive" ref={register({ required: true })}>
                  <option value={placeSelected.bestfive}>{placeSelected.bestfive}</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
          }
        </div>
        <div className="website">
          <p className="website-title"></p>
          {
            match.path === '/dashboard'
              ?
              <p>tapas.com</p>
              :
              match.path === '/add-place' ?
                <input type="text" ref={register({ required: true })} id="website" name="website" />
                :
                <input type="text" ref={register({ required: true })} value="website" id="website" name="website" />
          }

        </div>
        <div className="phone">
          <p className="phone-title"></p>
          {
            match.path === '/dashboard'
              ?
              <p>+34 688 544 45</p>
              :
              match.path === '/add-place' ?
                <input type="text" ref={register({ required: true })} name="phone" id="phone" />
                :
                <input type="text" ref={register({ required: true })} name="phone" id="phone" value="phone number" />
          }

        </div>
        <div className="edit">
          <p>edit</p>
        </div>
      </div>
      <div className="place-card images">
        <div className="image">
          {
            match.path === '/dashboard'
              ?
              images ?
                <div className="slider">
                  <div class="slides">
                    <div id="slide-1">
                      <img src={images.img1} alt="" />
                    </div>
                  </div>
                  <a href="#slide-1">1</a>
                  <a href="#slide-2">2</a>
                  <a href="#slide-3">3</a>
                  <a href="#slide-4">4</a>
                  <a href="#slide-5">5</a>
                </div>

                : null

              :
              match.path === '/add-place' ?
                <div>
                  <label>Link 1</label>
                  <input type="text" ref={register({ required: true })} name="img1" id="img1" />
                  <label>Link 2</label>
                  <input type="text" ref={register({ required: true })} name="img2" id="img2" />
                  <label>Link 3</label>
                  <input type="text" ref={register({ required: true })} name="img3" id="img3" />
                  <label>Link 4</label>
                  <input type="text" ref={register({ required: true })} name="img4" id="img4" />
                  <label>Link 5</label>
                  <input type="text" ref={register({ required: true })} name="img5" id="img5" />
                </div>

                :
                <div>
                  <label>Link 1</label>
                  <input type="text" ref={register({ required: true })} name="img1" id="img1" />
                  <label>Link 2</label>
                  <input type="text" ref={register({ required: true })} name="img2" id="img2" />
                  <label>Link 3</label>
                  <input type="text" ref={register({ required: true })} name="img3" id="img3" />
                  <label>Link 4</label>
                  <input type="text" ref={register({ required: true })} name="img4" id="img4" />
                  <label>Link 5</label>
                  <input type="text" ref={register({ required: true })} name="img5" id="img5" />
                </div>
          }
        </div>
      </div>
      <div className="place-card secondary-info">
        <div className="price">
          <p></p>
          {
            match.path === '/dashboard'
              ?
              priceIcon()
              :
              match.path === '/add-place' ?
                <select name="price" ref={register({ required: true })}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                :
                <select name="price" ref={register({ required: true })}>
                  <option value={placeSelected.price}>{placeSelected.price}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
          }

        </div>
        <div className="position">
          <div className="lat">
            <p>
              Lt -  {
                match.path === '/dashboard'
                  ?
                  checkData(lat)
                  :
                  match.path === '/add-place' ?
                    <input
                      ref={register({ required: true })}
                      name="lat"
                      type="number"
                      id="lat"
                      step=".000000000000001"
                    />
                    :
                    <input
                      ref={register({ required: true })}
                      name="lat"
                      type="number"
                      id="lat"
                      step=".000000000000001"
                      value={lat}
                    />

              }
            </p>
          </div>
          <div className="lng">
            <p>
              Lg - {
                match.path === '/dashboard'
                  ?
                  checkData(lng)
                  :
                  match.path === '/add-place' ?
                    <input
                      ref={register({ required: true })}
                      name="lng"
                      type="number"
                      id="lng"
                      step=".000000000000001"
                    />
                    :
                    <input
                      ref={register({ required: true })}
                      name="lng"
                      type="number"
                      id="lng"
                      step=".000000000000001"
                      value={lng}
                    />
              }
            </p>
          </div>
        </div>
        <div className="border-line"></div>
        <div className="opening-hours">
          {
            match.path === '/dashboard' ?

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
              :
              match.path === '/add-place' ?

                (
                  <div className="hours">
                    <div className="row-hours">
                      <label>Monday</label>
                      <input name="mondayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="mondayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="mondayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="mondayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Tuesday</label>
                      <input name="tuesdayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="tuesdayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="tuesdayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="tuesdayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Wednesday</label>
                      <input name="wednesdayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="wednesdayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="wednesdayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="wednesdayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Thursday</label>
                      <input name="thursdayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="thursdayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="thursdayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="thursdayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Friday</label>
                      <input name="fridayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="fridayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="fridayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="fridayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Saturday</label>
                      <input name="saturdayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="saturdayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="saturdayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="saturdayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Sunday</label>
                      <input name="sundayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="sundayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="sundayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="sundayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                  </div>
                )


                :

                (
                  <div className="hours">
                    <div className="row-hours">
                      <label>Monday</label>
                      <input name="mondayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="mondayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="mondayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="mondayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Tuesday</label>
                      <input name="tuesdayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="tuesdayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="tuesdayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="tuesdayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Wednesday</label>
                      <input name="wednesdayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="wednesdayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="wednesdayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="wednesdayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Thursday</label>
                      <input name="thursdayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="thursdayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="thursdayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="thursdayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Friday</label>
                      <input name="fridayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="fridayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="fridayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="fridayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Saturday</label>
                      <input name="saturdayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="saturdayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="saturdayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="saturdayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                    <div className="row-hours">
                      <label>Sunday</label>
                      <input name="sundayOpen"
                        ref={register({ required: true })}
                        type="time"
                        id="sundayOpen"
                        min="00:00"
                        max="23:59" ></input>
                      <input name="sundayClose"
                        ref={register({ required: true })}
                        type="time"
                        id="sundayClose"
                        min="00:00"
                        max="23:59" ></input>
                    </div>
                  </div>
                )
          }
        </div>
      </div>
      <div className="place-card description">
        <div className="text">
          {
            match.path === '/dashboard'
              ?
              placeSelected.description ?
                <p>{placeSelected.description}</p> :
                <p className="defualt-description">Please write a description</p>
              :
              match.path === '/add-place' ?
                <textarea ref={register({ required: true })} name="description" id="description" cols="60" rows="20"></textarea>
                :
                <textarea ref={register({ required: true })} name="description" id="description" cols="60" rows="20" value={placeSelected.description}></textarea>
          }
        </div>
      </div>
    </div>
  )
}

export default PlaceDetails