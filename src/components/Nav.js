import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/firstpage'>First</Link>
        <Link to='/more'>More practice</Link>
      </ul>
    </div>
  );
};

export default Nav;
