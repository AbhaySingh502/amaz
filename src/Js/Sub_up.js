import React from 'react'
import CurrencyFormat from "react-currency-format"
import '../css/sub_up.css'
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal' >
      <div className='sub_items'>
     <CurrencyFormat
      renderText ={(value)=>(
        <>
        <p>
          Subtotal({basket?.length} items): <strong>{value}</strong>
        </p>
        <small className='Sub_gift'>
          <input type='checkbox'/> This order conatis a gift
        </small>
        </>
     )}
        decimalScale ={2}
        value ={getBasketTotal(basket)}
        displayType ={"text"}
        thousandSeprator = {true}
        prefix ={"$"}

     />
     <button>Procead to checkout</button>
     </div>
    </div>
  )
}

export default Subtotal
