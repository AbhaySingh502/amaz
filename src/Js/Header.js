import React from 'react'
import "../css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useStateValue } from "./StateProvider";
// import Checkout from './Checkout';
import { Link } from 'react-router-dom';
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    
    <div className='header'> 
      <Link to="/">
      <img className='header_logo border' src= "https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''/> 
      
      </Link>
      <div className="deliver border">
        <span className='deliver_textOne'>Deliver To</span>
        <span  className='deliver_textTwo'><LocationOnIcon/>India</span>
      </div>
      <div className='header_search '>
        <div className='header_dropdown'>All
                  <ArrowDropDownIcon/>
        </div>
        <input className='header_searchInput' type='text' placeholder='Search Amazon'/>
        <SearchIcon className='header_searchIcon' />
      </div>
    <div className='header_nav'>
      <div className='header_option lang border'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/002/399/741/small/american-flag-icon-vector.jpg' alt=''/>
        <span>EN</span>
        <ArrowDropDownIcon className='drop'/>
      </div>

      <Link to= './login'>
        <div className='header_option border'>
        <span className='header_optionLineOne'>Hello,sign in</span>
            <span className='header_optionLineTwo'>Accounts & Lists</span>
        </div>
        </Link>
        <div className='header_option border'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& orders</span>
        </div>
        <Link to="/checkout">
            <div className='header_optionbasket border'>
                <AddShoppingCartIcon/>
                <span className='header_optionLineOne header_BasketCount'>{basket?.length}</span>
            </div>
        </Link>
    </div>
    </div>      

    
  )
}

export default Header
