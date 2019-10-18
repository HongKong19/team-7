import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';
import Tracker from './components/Tracker';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <Link to={'/contact'}>go to login</Link> <br></br>
      <Link to={'/tracker'}>go to track</Link>
      <Switch>
        <Route path='/contact' component={Copyright}/> 
        <Route path='/tracker' component={Tracker}/> 

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

