import React from 'react'
import './Footer.css'
import Github from "../../components/assets/github.png";
import Instagram from "../../components/assets/instagram.png";
import LinkedIn from "../../components/assets/linkedin.png";
import Logo from "../../components/assets/logo.png";

const Footer = () => {
  return (
    <div className='-container'>
        <hr/>
        <div className='footer'>
        <div className='social-links'>
        <img src={Github} alt=''></img>
        <img src={Instagram} alt=''></img>
        <img src={LinkedIn} alt=''></img>
        </div>
       <div className='logo-f'>
        <img src={Logo} alt=''></img>
        </div>
        </div>

      <div className='   blur-f-1'></div>
      <div className='   blur-f-2'></div>
     
      
    </div>
  );
}

export default Footer