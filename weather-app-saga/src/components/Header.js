import React, {useState} from 'react';
import logo from '../assets/Header logo.png'
import dayIcon from '../assets/Theme_Day.png'
import '../index.css'
import {useDispatch} from "react-redux";
import {CLICK} from "../redux/reducers/rootReducer";

const Header = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const changed = (e) => (setValue(e.target.value));
  const handlerAddCity = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      let city = value.trim()
      addCity(city)
      setValue('');
      console.log(city)
    }
  };
  const addCity = (city) =>{
    dispatch(addCityAction(city));
  }
  return (
    <div className='header'>
      <div className='wrapper'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='app_name'>Weather App</div>
      </div>
      <div className='wrapper'>
        <img src={dayIcon} alt="night-icon" className='logo1'/>
        <input placeholder='Enter Your city...'
               value={value}
               onChange={changed}
               onKeyDown={handlerAddCity}
        />
      </div>
    </div>
  );
};
const addCityAction = (payload) => ({ type: CLICK, payload });
export default Header;