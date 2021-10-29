import React, { useState } from 'react';

import './App.css';
import Img from './assets/greg.jpg';


// white practising Im also planning ideas of how to rebuild a  website about locking
// tributing my teachers
function App() {
  const [text, setText] = useState('');

  const handleClick = () => {
    setText(
      `
  Campbellock Jr was given the name because he mimiced Don Campbell and is known for his creativity with locking
  movements.
  A member of the Soul Train Gang and Locking Dance group from The watts
  writers workshop “Creative Generation” before joining the Original
  Lockers in 1973. 
  Greg helped to create several steps, moves, handshakes and routines
  associated with Locking. 
  Greg is also the source for many international lockers and has traveled
  the world teaching foundations the curriculum he created
</p>
`
    );
  };
  return (
    <div className='App'>
      <h1 style={{ color: '#f4f4f8' }}>Gregory Pope aka Campbellock Jr</h1>
      <div className="text-style">
        {text}
      </div>
      <button
        style={{
          padding: '0.5rem 1rem',
          background: '#282828',
          color: 'white',
          margin: '0 auto 2rem',
        }}
        onClick={handleClick}
      >
        read more...
      </button>
      <img src={Img} alt='' style={{ borderRadius: '10px' }} />
    </div>
  );
}

export default App;
