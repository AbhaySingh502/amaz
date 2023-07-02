import React from 'react'
import '../css/BasketItem.css'
function Basketitem({id,title, image, price,size,color}) {
  return (
    <div className='Baskemain'>
    <div className='Basket'>
        <div className='Basket_img'>
            <img src={image} />
        </div>
        <div className='Basket_right'>
            <div className='Basket_up'>
            
                <p className='Basket_title'>{title}</p>
                <p className="Basket_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <small className='Basket_gift'> <input type='checkbox'/><span className='textBas'>This is a gift <a href='#'>Learn More</a></span>
                </small>
                <p className='Basket_size'><span>Size: </span> {size}</p>
                <p className='Basket_size'><span>color: </span> {color}</p>
                
            </div>
            <div className='Basket_down'>
                <span className='BasLow'>Delete </span>
                <span className='BasLow'>Save for later </span>
                <span className='BasLow'>Compare with similar item </span>
                <span className='BasLow'>Share</span>
            </div>
        </div>
    </div>
        <div className='line'></div>
    </div>
  )
}

export default Basketitem
