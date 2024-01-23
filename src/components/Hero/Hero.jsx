import React from 'react'
import "./Hero.css"
import Header from './Header/Header';
import hero_image from "../../components/assets/hero_image.png"
import hero_image_black from "../../components/assets/hero_image_back.png"
import Heart from '../../components/assets/heart.png';
import Calories  from '../../components/assets/calories.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
       <Header/>
{/* the best add */}
       <div className='the-best-ad'>
        <div></div>
        <span>the best fitness in the town</span>
       </div>

      {/* hero heading */}
      <div className='hero-text'>
         <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
         </div>
         <div>
          <span>Ideal body</span>
         </div>
         <div >
          <span>In here we will help you to shape and build yours Ideal body and live up yours life to fullest
          </span>
         </div>
      </div>
      {/* figuress */}
      <div className='figures'>
        <div>
          <span>+140</span>
          <span>expert coachs</span>
        </div>
        <div>
          <span>+978</span>
          <span>members joined</span>
        </div>
        <div>
          <span>+50</span>
          <span>fitness programs</span>
        </div>
      </div>
      {/* hero buttons */}
      <div className='hero-buttons'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
      </div>
        </div>
        <div className='right-h'>
        <button className='btn'>Join Now</button>

        <div className='heart-rate'>
        <img src={Heart} alt="" />
        <span> Heart rate</span>
        <span>116 bpm</span>
        </div>

       {/* hero images */}
       
       <img src={hero_image} alt='' className='hero-image' />
       <img src={hero_image_black} alt='' className='hero-image_black' />

       {/* calories */}

       <div className='calories'>
       <img src={Calories} alt=''/>
       <div>
       <span>Calories Burned</span>
       <span>220 kcal</span>
       </div>

       </div>

     
        </div>
    </div>
  )
}

export default Hero