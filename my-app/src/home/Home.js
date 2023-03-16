
import React from 'react'
import Chart from '../components/chart/Chart'
import Featured from '../components/featured/Featured'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'
import Table from '../table/Table'
import Widget from '../widget/Widget'
import "./home.scss"
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="home-container">
        <Navbar/>

        <div className="widgets">
          <Widget type="users"/>
          <Widget type="order"/>
          <Widget type="earnings"/>
          <Widget type="balance"/>
        </div>

        <div className="charts">
          <Featured/>
          <Chart/>
        </div>

        <div className="list-container">
          <div className="list-title">Latest Transaction</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home