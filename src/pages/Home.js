import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Rob');
    const [events, setEvents] = useState([
        { title: "End racism and opression", id: 1 },
        { title: "Take care of nature, pick up all your trash", id: 2 },
        {title: "End violence and control gun violence", id: 3}
    ])
    

    const handleClick = () => {
        setName(prompt('What is your name'))
    };

    const handleEvent = (id) => {
        setEvents(events.filter((event) => {
            return id !== event.id
        }))
    }
    return (
        <div className="home">
            {(name === 'Rob') ?
                <div>
                    <h1> Welcome to my practice</h1>
                    <h1>My name is {name}</h1>
                </div> :
                <div>
                   <h1> Welcome <span className="highlight">{name}</span> nice to have you here</h1>
                </div>  
            }

            <button className="btn" onClick={handleClick}>What is your name?</button>
            
            <div className="lower">
                So what are the state of the world? we need to change
            </div>

            {events.map((ev) => (
                <div key={ev.id}>
                    <h2 className="events">{ev.title}</h2>
                    <button className="btn second"
                    onClick={() => {handleEvent(ev.id)}}>Delete</button>
                </div>
            ))}
    </div>
  );
};

export default Home;
