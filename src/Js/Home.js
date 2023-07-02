import React from 'react'
import "../css/Home.css"
import ProductTwo from './ProductTwo';
function Home() {
  return (
    <div className='home'>
      
      <div className='home_container'>
        {/* <div className='slider'>
            <div className='slide'>
            <img className="slider-image" src="https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg" alt="" />
            </div>
            <div className='slide'>
             <img className="slider-image" src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg/slides/four.jpg" alt="" />
             </div>
            <div className='slide'>
            <img className="slider-image" src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpgee.jpg" alt="" />
            </div>
            <div className='slide'>
            <img className="slider-image" src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" alt="" />
            </div>

            <div className='slide'>
            <img className="slider-image" src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />
            </div>
        </div> */}
  <img className='home_img' src='https://m.media-amazon.com/images/I/61qa3132IFL._SX3000_.jpg' alt='' />
        
        <div className='home_text'>
          You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
        <a href='#'>Click here to go to amazon.in</a>
        </div>
        <div className="home__row">
          <ProductTwo
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <ProductTwo
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <ProductTwo
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <ProductTwo
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <ProductTwo
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <ProductTwo
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
     </div>

      </div>
  )
}

export default Home
