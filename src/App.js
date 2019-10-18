import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';
import Dashboard from './Dashboard';
import Tracker from './components/Tracker'
import PersonalGoals from "./PersonalGoals";
import FamilyMember from './components/FamilyMember';
import Database from './components/Database';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Link to={'/login'}>go to login</Link><br></br>
      <Link to={'/dashboard'}>go to navbar</Link><br></br>
      <Link to={'/contact'}>go to login</Link> <br></br>
      <Link to={'/tracker'}>go to track</Link> <br></br>
      <Link to={'/familyMember'}>go to family member</Link><br></br>
      <Link to={"/personal_goals"}>go to personal goals </Link><br></br>
      <Link to={"/database"}>go to database of family </Link><br></br>

      <Switch>
        <Route path='/login' component={Copyright}/> 
        <Route path='/dashboard' component={Dashboard}/> 
        <Route path='/tracker' component={Tracker}/> 
        <Route path='/contact' component={Copyright}/> 
        <Route path='/tracker' component={Tracker}/> 
        <Route path='/familyMember' component={FamilyMember}/> 
        <Route path="/personal_goals" component={PersonalGoals} />
        <Route path="/database" component={Database} />
      </Switch>
       
    </BrowserRouter>
    </div>
  );
}

export default App;

