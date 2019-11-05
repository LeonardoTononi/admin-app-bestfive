import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="row">
      <label>{label}</label>
      <input onChange={handleChange} {...otherProps}></input>
    </div>

  )
}

export default FormInput;