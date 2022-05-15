import React from 'react'
import ProductContainer from './ProductContainer'
import './Cart.css'

export default function Cart() {
  return (
    <div className='outer_wrapper'>
      <div className='cart_wrapper'>

        <div className='products_wrapper'> 

          <div className='headings_1'>
            <h5 className= 'heading_name'>PRODUCT</h5> 
            <h5 className= 'heading_price'>PRICE</h5> 
            <h5 className= 'heading_quantity'>QUANTITY</h5> 
            <h5 className= 'heading_subtotal'>SUBTOTAL</h5>
            {/* <h5 className= 'headings_2'>  </h5> */}
          </div>

          <ProductContainer />
        </div>  

  
{/* Cart total */}
        <div className='purchase_total'>
              <h4>CART TOTALS</h4>
              <hr/>
              <p className='subtotal_3'>
                  <span>Subtotal</span>
                  <span> Rs.2000</span>
              </p>
              <hr/>
              <p className='tax'>
                <span> Tax 13%</span>
                <span> Rs.600</span>
              </p>
              <p className='total'>
                <span>Total</span>
                <span> Rs.2600</span>
              </p>
              <button className='checkoutBtn'>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}
