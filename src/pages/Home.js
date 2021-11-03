import React, { useState } from 'react';
import EventList from '../components/EventList';
import Modal from '../components/Modal';
import NewEventForm from '../components/NewEventForm';

const Home = () => {
  const [name, setName] = useState('Rob');
  const [showEvents, setShowEvents] = useState(false);
  const [events, setEvents] = useState([
    { title: 'End racism and opression', id: 1 },
    { title: 'Take care of nature, pick up all your trash', id: 2 },
    { title: 'End violence and control gun violence', id: 3 },
  ]);

  const [showMod, setShowMod] = useState(false);

  const handleClick = () => {
    setName(prompt('What is your name'));
  };

  const handleEvent = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    };
    
    
  const handleMod = () => {
    setShowMod(false);
  };



  return (
    <div className='home'>
      {name === 'Rob' ? (
        <div>
          <h1> Welcome to my practice</h1>
          <h1>My name is {name}</h1>
        </div>
      ) : (
        <div>
          <h1>
            {' '}
            Welcome <span className='highlight'>{name}</span> nice to have you
            here
          </h1>
        </div>
      )}

      <button className='btn' onClick={handleClick}>
        What is your name?
      </button>

      <div className='lower'>
        Things we as humans need to change for a better world...
      </div>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show events</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleEvent={handleEvent} />}

      <button className='btn' onClick={() => setShowMod(true)}>
        Add new event
      </button>

      {showMod && (
        <Modal handleMod={handleMod}>
          <NewEventForm />
        </Modal>
      )}
    </div>
  );
};

export default Home;
