import React from 'react';

import './modal.styles.scss';

const Modal = (
  {
    placeToDelete,
    setToggleModalActions,
    toggleModalActions,
    deletePlace,
    setToggleModalSuccess,
    toggleModalSuccess
  },
  isActions,
  isSuccess
) => {
  return isActions ? (
    <div className='modal'>
      <h2>
        Do you want delete <strong>{placeToDelete.name}</strong> permanently
        from the database?
      </h2>
      <button className='yes-btn' onClick={() => deletePlace(placeToDelete)}>
        Delete
      </button>
      <button
        className='no-btn'
        onClick={() => setToggleModalActions(!toggleModalActions)}>
        Cancel
      </button>
    </div>
  ) : isSuccess ? (
    <div className='modal'>
      <h2>
        You delete successfully <strong>{placeToDelete.name}</strong> !
      </h2>
      <button
        className='ok-btn'
        onClick={() => setToggleModalSuccess(!toggleModalSuccess)}>
        Ok
      </button>
    </div>
  ) : null;
};

export default Modal;
