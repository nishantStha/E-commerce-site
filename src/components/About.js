import React from 'react'
import './About.css'

export default function About() {
  return (
    <div>
        <img src='./images/Body_image.jpg' className='body_image' alt='body_image'></img>
        <div className='center'>
          <div className='headings'>
              <h1>
                  Summer Accessories Super Sale
              </h1>
              <p>
                  Great deals on brands like Samsung, Apple, Beats and many more
              </p>
              <button className='shopBtn'>Shop Now</button>
          </div>
        </div>
       
    </div>
  )
}
