import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import FirstPage from './pages/FirstPage';
import Home from './pages/Home';
import More from './pages/More';

// white practising Im also planning ideas of how to rebuild a  website about locking
// tributing my teachers
function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/firstpage' component={FirstPage} />
        <Route path='/more' component={More} />
      </Switch>
    </div>
  );
}

export default App;
