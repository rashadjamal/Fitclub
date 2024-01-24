import React from 'react'
import {plansData} from '../../../data/plansData'
import whiteTicke from '../../assets/whiteTick.png'
import './Plans.css';

const Plans = () => {
  return (
   <div className='plans-container'>
   <div className='blur plans-blur-1'></div>
   <div className='blur plans-blur-2'></div>
    <div className='program-header' style={{gap: '2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
    </div>
     {/* plans card */}
     <div className='plans'>
     {plansData.map((plan,i)=>(
        <div className='plan' key={i}>
        {plan.icon}
        <span>{plan.name}</span>
        <span>$ {plan.price}</span>
s
        <div className='features'>
           {plan.features.map((features,i)=>(
            <div className='feature'>
            <img src={whiteTicke} alt='' ></img>
            <span key={i}>{features} </span>
            </div>
           ))}
        </div>

           <div>
            <span>See more benefits</span>
           </div>
           <button className='btn'>join Now</button>
        </div>
     ))}

     </div>
   </div>
  )
}

export default Plans