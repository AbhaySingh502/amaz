import React from 'react'
import '../css/checkout.css';
import Basketitem from './Basketitem'
import { useStateValue } from "./StateProvider";
import Subtotal from './Sub_up'
import subdown from './Sub_down'
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_full'>
            <div className='check_mar'>
                <div className='check_main'>
                    <div className='textCheck'><h1>Shooping Cart</h1></div>
                    <div className='line'></div>
                    <div className='check_column'>
                        <div className='check_pro'>
                        {basket.map(item => (
            <Basketitem
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    color={item.color}
                    size={item.size}
            />
          ))}
                            <Basketitem
                            id="12321351"
                            title="FORTEM Car Trunk Organizer, Car Storage Organizer, Collapsible Multi Compartment Car Organizer, SUV Trunk Organizer, Non Slip Bottom, Adjustable Securing Straps, Foldable…"
                            image="https://m.media-amazon.com/images/I/91rIel5UYPL._AC_AA180_.jpg"
                            price={20}
                            size="Standard"
                            color = "Black"
                            />
                            <Basketitem
                            id="12321352"
                            title="
    FORTEM Tire Inflator Portable Air Compressor 150 PSI, Bike Pump, 12V Electric Air Pump for Car Tires and Bicycles w/LED Light, Digital Tire Pressure Gauge w/Auto Pump/Shut Off, Carrying Case (Red)FORTEM Tire Inflator Portable Air Compressor 150 PSI, Bike Pump, 12V Electric Air Pump for Car Tires and Bicycles w/LED Light, Digital Tire Pressure Gauge w/Auto Pump/Shut…  "
                            image="https://m.media-amazon.com/images/I/91Ku5Q-MF0L._AC_AA180_.jpg"
                            price={29.9}
                            size="12V Dc"
                            color = "Red"
                            />
                            <Basketitem
                            id="12321351"
                            title="

                            FORTEM Chair Cushion, Seat Cushion for Office Chair, Car Seat Cushion, Coccyx Orthopedic Pillow, Desk Chair Memory Foam Sitting Pillow, Washable Cover (Mesh, Black)FORTEM Chair Cushion, Seat Cushion for Office Chair, Car Seat Cushion, Coccyx Orthopedic Pillow, Desk Chair Memory Foam Sitting Pillow, Washable Cover (Mesh, Black) "
                            image="https://m.media-amazon.com/images/I/81J+nqVn1YL._AC_AA180_.jpg"
                            price={20}
                            size="Standard"
                            color = "Black Mesh"
                            />
                        </div>
                    </div>
                </div>
                <div className='check_right'>
                    <div className='sub_up'>
                        <Subtotal/>
                    </div>
                    <div className='sub_down'>
                        <span className='subdown_text'>Customers Who Bought Items in Your Recent History Also Bought</span>
                        <div className='sub_down_items'>
                            <subdown/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Checkout
