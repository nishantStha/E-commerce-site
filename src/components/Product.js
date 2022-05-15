import React from 'react'
import './Product.css'

export default function Product({id, product_name, category, price, quantity, image}) {
  return (
    <div className='item_wrap'>

          <div className='image_wrap'>
            <img src={image} className='item_image' alt='product'></img>
            <button className='addBtn'><img src='./images/Products/cart_logo.png' alt='cart logo' className='cart_logo'></img>Add to Cart</button>             
          </div>
          
          <div className='description'>
              <span className='category'>{category}</span>
              <span className='product_name'>{product_name}</span>
              <span className='price'>{price}</span>
          </div>
    </div>
  )
}
