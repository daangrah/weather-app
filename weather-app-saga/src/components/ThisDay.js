import React from 'react';
import {useSelector} from "react-redux";

const ThisDay = () => {
  const store = useSelector(state => state)
  return (
    <div className='this-day-container'>
      <div className='this-day-tamperature'>
        {store.weather.temperature}°
      </div>
      <div className='this-day'>
        TODAY
      </div>
      <div className='this-day-city'>
        City: {store.city}
      </div>
    </div>
  );
};

export default ThisDay;