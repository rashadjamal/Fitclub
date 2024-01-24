import React from 'react'
import './Reasons.css';
import image1 from "../../components/assets/image1.png";
import image2 from "../../components/assets/image2.png";
import image3 from "../../components/assets/image3.png";
import image4 from "../../components/assets/image4.png";
import nb    from "../../components/assets/nb.png";
import adidas    from "../../components/assets/adidas.png";
import nike      from "../../components/assets/nike.png";
import tick      from "../../components/assets/tick.png";


const Reasons = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className='left-r'>
            <img src={image1} alt='' />
            <img src={image2} alt='' />
            <img src={image3} alt='' />
            <img src={image4} alt='' />
        </div>
        <div className='right-r'>
          <span>some reasons</span>

          <div>
            <span className='stroke-text'>why</span>
            <span> choose us?</span>
          </div>

          <div  className='details-r'>
          <div>
                   <img src={tick} alt='' />
             <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
                   <img src={tick} alt='' />
             <span>TRAIN SMARTER AND FASAT THAN BEFORE</span>
          </div>
          <div>
                   <img src={tick} alt='' />
             <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
                  <img src={tick} alt='' />
             <span>RELIABLE PARTNERS</span>
             </div>
          </div>
               <span style={{
                color: "var(--gray)",
                fontWeight: "normal"
               }}>
               
               OUR PARTNERS
               </span>
               <div className='partners'>
                <img src={nb} alt='' />
                <img src={adidas} alt='' />
                <img src={nike} alt='' />
               </div>
        </div>
    </div>
  )
}

export default Reasons