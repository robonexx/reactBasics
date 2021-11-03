import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';

// white practising Im also planning ideas of how to rebuild a  website about locking
// tributing my teachers
function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
