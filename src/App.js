import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';
import Dashboard from './Dashboard';
import Tracker from './components/Tracker'
import PersonalGoals from "./PersonalGoals";
import DietPlan from "./DietPlan";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Link to={'/login'}>go to login</Link>
      <Link to={'/dashboard'}>go to navbar</Link>
      <Link to={'/contact'}>go to login</Link> <br></br>
      <Link to={'/tracker'}>go to track</Link> <br></br>
      <Link to={'/familyMember'}>go to family member</Link>
      <Link to={"/personal_goals"}>go to personal goals </Link>
      <Link to={"/diet_plan"}>go to diet plan</Link>


      <Switch>
        <Route path='/login' component={Copyright}/> 
        <Route path='/dashboard' component={Dashboard}/> 
        <Route path='/tracker' component={Tracker}/> 
        <Route path='/contact' component={Copyright}/> 
        <Route path='/tracker' component={Tracker}/> 
        <Route path='/familyMember' component={FamilyMember}/> 
        <Route path="/personal_goals" component={PersonalGoals} />
        <Route path="/diet_plan" component={DietPlan} /> 
      </Switch>
    
    </BrowserRouter>
    </div>
  );
}

export default App;

