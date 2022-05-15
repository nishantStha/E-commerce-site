import React from 'react'

export default function Product_container() {
  return (
    <div className='product_container'>         
          <div className='product_details'>
            <div className='image_div'>
                <img src="./images/Products/hoodie.png" className='product_image' alt='product_img'></img>
            </div>
          
            <span className='product_name'>Essentials Hoodie White</span>
          </div>


          <div className='product_rate'>
              <span className='rate'>Rs.3000</span>
          </div>
              

          <div className='quantity_2'>
              <div className='minus_icon'>
                <img src='./images/icons/minus.png' alt='minus'></img>
              </div>

              <span className='amount'>10</span>

              <div className='plus_icon'>
                <img src='./images/icons/plus_icon.png' alt='plus'></img>
              </div>
          </div>
                

          <div className='subtotal_2'> 
              <span className='subtotal'>Rs.3000</span>
          </div>

          <div className='delete_2'>
            <img src='./images/icons/remove_icon.png' alt='remove_icon'></img>
          </div>
    </div>
  )
}
