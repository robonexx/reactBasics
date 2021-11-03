import React, { useState } from 'react';
import EventList from '../components/EventList';
import Modal from '../components/Modal';
import NewEventForm from '../components/NewEventForm';

const Home = () => {
  const [name, setName] = useState('Rob');
  const [showEvents, setShowEvents] = useState(false);
  const [events, setEvents] = useState([]);
  const [showMod, setShowMod] = useState(false);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowMod(false);
  };

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
        <Modal>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
