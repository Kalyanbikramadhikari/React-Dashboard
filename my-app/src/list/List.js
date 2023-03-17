import React from 'react'
import DataTable from '../components/datatable/DataTable'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import "./list.scss"
const list = () => {
  return (
    <div className='list'>
      <Sidebar/>

      <div className="list-container">
        <Navbar/>

        <DataTable/>

        
      </div>
    </div>
  )
}

export default list