import React from 'react'
import { Link } from 'react-router-dom';

import './databaseUI.styles.scss'

import TableDB from '../../components/TableDB/tableDB.component'

const DatabaseUI = () => {
  return (
    <div>
      <h1 className="title"><span role="img" aria-label="floppy">💾</span> Database</h1>
      <Link to="/"><button>Add Place</button></Link>
      <TableDB />
    </div>
  )
}

export default DatabaseUI