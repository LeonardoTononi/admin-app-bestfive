import React from 'react'
import { Link } from 'react-router-dom';

import './databaseUI.styles.scss'

import TableDB from '../../components/TableDB/tableDB.component'

const DatabaseUI = () => {
  return (
    <div>
      <h1 className="title">Database</h1>
      <Link to="/"><button>Add place</button></Link>
      <TableDB />
    </div>
  )
}

export default DatabaseUI