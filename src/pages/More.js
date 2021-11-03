import React from 'react';
import Title from '../components/Title';
import ClockHook from '../components/Clock/ClockHook';
import ClockClass from '../components/Clock/ClockClass'

const More = () => {
 
  const subtitle = 'Welcome to my house';
  return (
    <div>

      <Title text='Robs coding world' subtitle={subtitle} />

      <ClockClass />
      <ClockHook />
    </div>
  );
};

export default More;
