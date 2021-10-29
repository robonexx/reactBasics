import React from 'react';
import Title from '../components/Title';
import Modal from '../components/Modal';

const More = () => {

    const subtitle = "Welcome to my house"
  return (
      <div>
          <Modal>
                <h2>Check your self</h2>
                <p>before you wreck yourself</p>
              </Modal>
          <Title text="Robs coding world" subtitle={subtitle}/>
    </div>
  );
};

export default More;
