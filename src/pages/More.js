import React, { useState } from 'react';
import Title from '../components/Title';
import Modal from '../components/Modal';

const More = () => {
  const [showModal, setShowModal] = useState(true);

  console.log(showModal);

  const handleModal = () => {
    setShowModal(false);
  };

  const subtitle = 'Welcome to my house';
  return (
    <div>
      {showModal && (
        <Modal handleModal={handleModal}>
          <h2>Check your self</h2>
          <p>before you wreck yourself</p>
          <a href='/'>Read about it...</a>
        </Modal>
      )}

      <Title text='Robs coding world' subtitle={subtitle} />
    </div>
  );
};

export default More;
