import React, { Component } from 'react';
import { storage } from '../../firebase/firebase';

import ImageCarouselOrUpload from '../Images-carousel-upload/images-carousel-upload.component';
import {
  uploadOnStorageAndSetLinkDb_1,
  uploadOnStorageAndSetLinkDb_2,
  uploadOnStorageAndSetLinkDb_3,
  uploadOnStorageAndSetLinkDb_4,
  uploadOnStorageAndSetLinkDb_5
} from '../../firebase/upload-image-functions';

import './place-details.styles.scss';

import YesIcon from '../../assets/icon-done.png';
import NotIcon from '../../assets/not-icon.png';
import MoneyIcon from '../../assets/icon-money.png';
import NoImage from '../../assets/no-image.png';

class PlaceDetails extends Component {
  state = {
    categoryImgUrl: '',
    imageFiles: []
  };

  // Download from storage icon category
  downloadCategoryImages = async categoryName => {
    await storage
      .ref(`category/icons/${categoryName}.png`)
      .getDownloadURL()
      .then(url => this.setState({ categoryImgUrl: url }));
  };

  render() {
    const { placeSelected } = this.props;
    // Check if placeSelected property are present
    const lat =
      placeSelected && placeSelected.position
        ? placeSelected.position.lat
        : null;
    const lng =
      placeSelected && placeSelected.position
        ? placeSelected.position.lng
        : null;
    const week =
      placeSelected && placeSelected.openingHours
        ? placeSelected.openingHours
        : null;

    // Check if data exists
    const checkData = item => {
      return item ? item : '-';
    };

    // Assign to given price an icon
    const priceIcon = () => {
      switch (placeSelected.price) {
        case '1':
          return (
            <div>
              <img src={MoneyIcon} alt='icon money' />
              <img src={MoneyIcon} alt='icon money' className='opacity' />
              <img src={MoneyIcon} alt='icon money' className='opacity' />
            </div>
          );
        case '2':
          return (
            <div>
              <img src={MoneyIcon} alt='icon money' />
              <img src={MoneyIcon} alt='icon money' />
              <img src={MoneyIcon} alt='icon money' className='opacity' />
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

    const fileUpload = e => {
      e.preventDefault();
      const { imageFiles } = this.state;
      uploadOnStorageAndSetLinkDb_1(
        placeSelected.category,
        placeSelected,
        imageFiles
      );
      uploadOnStorageAndSetLinkDb_2(
        placeSelected.category,
        placeSelected,
        imageFiles
      );
      uploadOnStorageAndSetLinkDb_3(
        placeSelected.category,
        placeSelected,
        imageFiles
      );
      uploadOnStorageAndSetLinkDb_4(
        placeSelected.category,
        placeSelected,
        imageFiles
      );
      uploadOnStorageAndSetLinkDb_5(
        placeSelected.category,
        placeSelected,
        imageFiles
      );
    };

    // Upload image on storage functions
    const fileHandler = event => {
      let files = Object.values(event.target.files);
      this.setState({ imageFiles: files });
    };

    const imagesAreAlreadyUploaded = () => {
      if (
        (placeSelected.imageLink_1 !== '') &
        (placeSelected.imageLink_2 !== '') &
        (placeSelected.imageLink_3 !== '') &
        (placeSelected.imageLink_4 !== '') &
        (placeSelected.imageLink_5 !== '')
      ) {
        return placeSelected ? (
          <ImageCarouselOrUpload
            isCarousel
            placeSelected={placeSelected}
            fileUpload={fileUpload}
          />
        ) : null;
      } else {
        return (
          <ImageCarouselOrUpload
            isUpload
            fileUpload={fileUpload}
            fileHandler={fileHandler}
          />
        );
      }
    };

    return (
      <div className='place-details-container'>
        <div className='place-card main-info'>
          <div className='category'>
            <div className='category-icon'>
              {placeSelected ? (
                this.downloadCategoryImages(placeSelected.category) ? (
                  <img src={this.state.categoryImgUrl} alt='' />
                ) : null
              ) : (
                <img src={NoImage} alt='no icon' />
              )}
            </div>
            <div>
              <p className='category-title'></p>
              <p>{checkData(placeSelected.category)}</p>
            </div>
          </div>
          <div className='bestfive'>
            <p className='bestfive-title'></p>
            {placeSelected.bestfive === 'yes' ? (
              <img src={YesIcon} alt='yes icon' />
            ) : (
              <img src={NotIcon} alt='no icon' />
            )}
          </div>
          <div className='name'>
            <p className='name-title'></p>
            <p>{checkData(placeSelected.name)}</p>
          </div>
          <div className='google-id'>
            <p className='googleID-title'></p>
            <p>{checkData(placeSelected.googleID)}</p>
          </div>
          <div className='website'>
            <p className='website-title'></p>
            <p>{checkData(placeSelected.website)}</p>
          </div>
          <div className='phone'>
            <p className='phone-title'></p>

            <p>{checkData(placeSelected.phone)}</p>
          </div>
        </div>
        <div className='place-card place-images'>
          {placeSelected ? imagesAreAlreadyUploaded() : null}
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
        <div className='place-card description-details'>
          <div className='text'>
            {placeSelected.description ? (
              <p>{placeSelected.description}</p>
            ) : (
              <p className='default-description'>Please write a description</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlaceDetails;
