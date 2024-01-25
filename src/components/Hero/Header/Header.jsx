

import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import "./Header.css"
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';
function Header() {
  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpend,setMenuOpend]= useState(false);
  return (
   <div className='header'>
      <img src={Logo} alt="LogoImage" className='logo'/>
      {(menuOpend=== false && mobile ===true)?(
        <div style={{
          backgroundColor: "var(--appColor)",
          padding: "0.5rem",
          borderRadius:"5px",
        }}
        
        onClick={()=> setMenuOpend(true)}
        >
        <img src={Bars} alt=' ' style={{widows:"1.5rem",height:"1.5rem"}}  /></div>

      ):  (<ul className='header-menu'>
        <li>
        <Link
         onClick={()=>setMenuOpend(false)}
         activeClass='active'
         to='home'
           span={true}
           smooth={true}
        >Home</Link>
          </li>
        <li> 
        <Link
        onClick={()=>setMenuOpend(false)}
        to='programs'
        span={true}
          smooth={true}
        >Programs</Link></li>
        <li>
        <Link
        onClick={()=>setMenuOpend(false)}
        to='reasons'
           span={true}
           smooth={true}
        >Why us</Link></li>
        <li>
        <Link
         onClick={()=>setMenuOpend(false)}
         to='plans'
           span={true}
           smooth={true}

       > Plans</Link></li>
        <li>
         <Link
          onClick={()=>setMenuOpend(false)}
           to='Testimonials'
           span={true}
           smooth={true}
    >  Testimonials</Link></li>
      </ul>
      )}
     
      </div>
  );
}

export default Header;
