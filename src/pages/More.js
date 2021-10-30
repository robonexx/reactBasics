import React, { useState } from 'react';
import Title from '../components/Title';
import Modal from '../components/Modal';
import ClockHook from '../components/Clock/ClockHook';
import ClockClass from '../components/Clock/ClockClass'

const More = () => {
 /*  const [showModal, setShowModal] = useState(false);

  console.log(showModal);

  const handleModal = () => {
    setShowModal(false);
  }; */

  const subtitle = 'Welcome to my house';
  return (
    <div>
     {/*  <button className='btn' onClick={() => setShowModal(true)}>
        Show info
      </button>
      {showModal && (
        <Modal handleModal={handleModal}>
          <h2>Check your self</h2>
          <p>before you wreck yourself</p>
          <a href='/'>Read about it...</a>
        </Modal>
      )} */}

      <Title text='Robs coding world' subtitle={subtitle} />

      <ClockClass />
      <ClockHook />
    </div>
  );
};

export default More;
