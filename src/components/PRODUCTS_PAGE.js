import React from 'react'
import Product from './Product';
import {items} from './Items';
import './Product.css'

export default function PRODUCTS_PAGE() {

  // const [product, setProduct] = useState(items);
  return (
    <div className='container'>
      <div>
        <h2>Our Products</h2>
      </div>

        <div className='wrapper'>
          {items.map((eachEl) => {
              return <Product key={eachEl.id}{...eachEl}/>
            })
          }

        </div>
    </div>
  )
}
