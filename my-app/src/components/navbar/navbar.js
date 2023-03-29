import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitSharpIcon from '@mui/icons-material/FullscreenExitSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';import ListIcon from '@mui/icons-material/List';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input className='search2' type="text" name="" value="" placeholder='Search....'/>
          <SearchIcon/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon  className='icon'/>
            English
          </div>
          <div className="item">
            <DarkModeIcon />
            
          </div>
          <div className="item">
            <FullscreenExitSharpIcon className='icon'/>
            
          </div>
          <div className="item">
            <NotificationsIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleSharpIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className='icon'/>
            
          </div>
          <div className="item">
            <img src="/images/me.jpg"
            className='avatar'/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar