import React from 'react';
import ThisDay from "./ThisDay";
import ThisDayInfo from "./ThisDayInfo";

const TodayInfo = () => {
  return (
    <div className='today_container'>
      <ThisDay />
      <div></div>
      <ThisDayInfo />
    </div>
  );
};

export default TodayInfo;