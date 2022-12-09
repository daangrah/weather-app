import React from 'react';
import logo from '../assets/Header logo.png'
import dayIcon from '../assets/Theme_Day.png'
import '../index.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='wrapper'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='app_name'>Weather App</div>
      </div>
      <div className='wrapper'>
        <img src={dayIcon} alt="night-icon" className='logo1'/>
        <input placeholder='Enter Your city...'/>
      </div>
    </div>
  );
};

export default Header;