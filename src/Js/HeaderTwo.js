import React from 'react'
import "../css/HeaderTwo.css"
import DehazeIcon from '@mui/icons-material/Dehaze';
function HeaderTwo() {
  return (
    <div className='header_two'>
      <div className='headerTwo_all'> 
      <DehazeIcon/> 
      <span>All</span></div>

        <div className='headerTwo_center'>
            <span className='text border'>Today's Deals</span>
            <span className='text border'>Customer Service</span>
            <span className='text border'>Registry</span>
            <span className='text border'>Gift Cards</span>
            <span className='text border'>Sell</span>
        </div>


        <div className='headerTwo_right '>
            <span className='text border'>Shop great Deals now</span>
        </div>

        

    </div>
  )
}

export default HeaderTwo
