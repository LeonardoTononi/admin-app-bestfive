import React, { Component } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';

import forwardIcon from '../../assets/icons/icons8-forward-50.png';
import backwardIcon from '../../assets/icons/icons8-back-50.png';

import './images-carousel-upload.styles.scss';

class ImageCarouselOrUpload extends Component {
  render() {
    const {
      isCarousel,
      isUpload,
      isEdit,
      placeSelected,
      fileUpload,
      fileHandler
    } = this.props;

    const carouselOptions = {
      align: 'center',
      containerSelector: '*',
      slidesToScroll: 1,
      containScroll: true,
      draggable: true,
      dragFree: true,
      loop: false,
      speed: 10,
      startIndex: 0,
      selectedClass: 'is-selected',
      draggableClass: 'is-draggable',
      draggingClass: 'is-dragging'
    };

    const carousel = () => {
      return (
        <div className='carousel-container'>
          <EmblaCarouselReact
            emblaRef={c => (this.embla = c)}
            options={carouselOptions}>
            <div style={{ display: 'flex' }}>
              <div className='image-container'>
                <img src={placeSelected.imageLink_1} alt='' />
              </div>
              <div className='image-container'>
                <img src={placeSelected.imageLink_2} alt='' />
              </div>
              <div className='image-container'>
                <img src={placeSelected.imageLink_3} alt='' />
              </div>
              <div className='image-container'>
                <img src={placeSelected.imageLink_4} alt='' />
              </div>
              <div className='image-container'>
                <img src={placeSelected.imageLink_5} alt='' />
              </div>
            </div>
          </EmblaCarouselReact>
          <div className='carousel-buttons'>
            <button onClick={() => this.embla.scrollPrev()}>
              <img src={backwardIcon} alt='' />
            </button>
            <button onClick={() => this.embla.scrollNext()}>
              <img src={forwardIcon} alt='' />
            </button>
          </div>
        </div>
      );
    };
    const upload = () => {
      return (
        <div
          className={
            isEdit ? 'add-image-container-edit' : 'add-image-container'
          }>
          <label className='file'>
            <input
              type='file'
              multiple={true}
              onChange={fileHandler}
              name='images'
              id='images'
            />
            <span className='file-custom'></span>
          </label>
          <button className='add-image-btn' onClick={fileUpload}>
            Upload
          </button>
        </div>
      );
    };
    return (
      <div>
        {isCarousel ? carousel() : isUpload ? upload() : [carousel(), upload()]}
      </div>
    );
  }
}

export default ImageCarouselOrUpload;
