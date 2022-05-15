import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
        <nav>
        <ul>
        <Link to='/'>
            <li className='logo'>
                <img src='./images/Nav/logo 2x.png' className='image' alt='logo'></img>
            </li>
        </Link>
        <Link to='/cart'>
            <li className='cart_wrap'>
                    <img src='./images/Nav/Shopping_cart 2x.png' className='image' alt='cart_logo'></img>
                    <div className='cart_detail'>
                        <span className='cart'>Shopping Cart</span>
                        <span className='price'>$0.00</span>
                    </div>
            </li>
        </Link>
        </ul>
    </nav>
    
  )
}
