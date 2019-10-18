import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';
import Tracker from './components/Tracker';
import FamilyMember from './components/FamilyMember';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <Link to={'/contact'}>go to login</Link> <br></br>
      <Link to={'/tracker'}>go to track</Link> <br></br>
      <Link to={'/familyMember'}>go to family member</Link>

      <Switch>
        <Route path='/contact' component={Copyright}/> 
        <Route path='/tracker' component={Tracker}/> 
        <Route path='/familyMember' component={FamilyMember}/> 
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

