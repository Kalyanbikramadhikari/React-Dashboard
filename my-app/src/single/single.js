import React from 'react'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import Table2 from '../table/Table'
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      
      <Sidebar/>
      <div className="single-container">
        <Navbar/>

        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h1 className="title">User Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="item-img" />
              <div className="details">
                <h5 className="item-title">Kalyan Bikram Adhikari</h5>
                <div className="item-detail">
                  <span className="item-key">Email:</span>
                  <span className="item-value">kalyan@gmail.com</span>

                </div>
                
                <div className="item-detail">
                  <span className="item-key">Phone No:</span>
                  <span className="item-value">+977 58457484</span>
                  
                </div>
                <div className="item-detail">
                  <span className="item-key">Address:</span>
                  <span className="item-value">Kathmandu</span>
                  
                </div>
                <div className="item-detail">
                  <span className="item-key">Country:</span>
                  <span className="item-value">Nepal</span>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="right">

            chart at 205
          </div>
        </div>

        <div className="bottom">
          <div className="user-products">
            <span className="titile">User Products</span>
            <Table2/>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Single