import { useState, useRef } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('stockholm');
  /* 
  const title = useRef();
  const date = useRef(); */

  const resetForm = () => {
    setTitle('');
    setDate('');
    setLocation('stockholm');

    /* title.current.value = '';
    date.current.value = ''; */
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      /*  title: title.current.value,
      date: date.current.value, */
      title,
      date,
      location,
      id: Math.floor(Math.random() * 10000),
    };
    addEvent(event);
    resetForm();
  };
  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input
          type='text'
          /* ref={title} */
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event date:</span>
        <input
          type='date'
          /* ref={date} */
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>

      <label>
        <span>Event location: </span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value='Stockholm'>Stockholm</option>
          <option value='Malmö'>Malmö</option>
          <option value='Göteborg'>Göteborg</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
