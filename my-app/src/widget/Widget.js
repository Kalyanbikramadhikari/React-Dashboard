import React from 'react'
import './widget.scss'
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PersonOutlineSharp from '@mui/icons-material/PersonOutlineSharp';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import AccountBalanceWalletSharpIcon from '@mui/icons-material/AccountBalanceWalletSharp';

const Widget = ({type}) => {
  // console.log('hi', type)
  let data;
 
  switch(type){
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon:(
          <PersonOutlineSharp className='icon person'  />

        )
      };
    break;

    case "order":
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "View all orders",
      icon:(
        <ShoppingCartCheckoutSharpIcon className='icon cart'/>

      )
    };
    break;
    case "earnings":
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "View all earnings",
      icon:(
        <MonetizationOnSharpIcon className='icon dollar'/>

      )
    };
    break;
    
    case "balance":
    data = {
      title: "BALANACE",
      isMoney: true,
      link: "View balance",
      icon:(
        <AccountBalanceWalletSharpIcon className='icon balance'/>

      )
    };
    break;

    default:
      break;
  }

  // console.log('data', data)
  return (
    <div className='widget'>
        <div className="left">
          <span className="title">{ data.title}</span>
          <span className="counter">{data.isMoney && "$" }500</span>

          <span className="link">{data.link}</span>

        </div>
        <div className="right">
          
          <div className="percentage positive">
            {<KeyboardArrowUpSharpIcon/>}20%
          </div>
          {data.icon} 


        </div>
    </div>
  )
}

export default Widget