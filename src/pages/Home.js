import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Rob');
    

    const handleClick = () => {
        setName(prompt('What is your name'))
    };
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
    </div>
  );
};

export default Home;
