import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import ViewListIcon from '@mui/icons-material/ViewList';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">AdminPage</span>
            </Link>
        </div>  
        <hr/>
        <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icons'/>
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>

            <li>
            <Link to="/users" style={{textDecoration:"none"}}>
                <GroupIcon className='icons'/>
                
                <span>Users</span>

            </Link>
            </li>
            <li>
            <Link to="/products" style={{textDecoration:"none"}}>
                <AddBusinessIcon className='icons'/>
                <span>Products</span>
            </Link>
            </li>
            <li>
                <ViewListIcon className='icons'/>
                <span>Orders</span>
            </li>
            <li>
                <AirportShuttleIcon className='icons'/>
                <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>

            <li>
                <StackedBarChartIcon className='icons'/>
                <span>Stats</span>
            </li>
            <li>
                <NotificationsIcon className='icons'/>
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>

            <li>
                <MedicationLiquidIcon className='icons'/>
                <span>System Health</span>
            </li>
            <li>
                <CollectionsBookmarkIcon className='icons'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsApplicationsIcon className='icons'/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>

            <li>
                <PersonIcon className='icons'/>
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className='icons'/>
                <span>Logout</span>
            </li>
        </ul>
        </div>
        <div className='bottom'>
            <div className="color-option"></div>
            <div className="color-option"></div>
            <div className="color-option"></div>

        </div>
    </div>
  )
}

export default Sidebar