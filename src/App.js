import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';
import Dashboard from './Dashboard';
import PersonalGoals from "./PersonalGoals";
import FamilyMember from './components/FamilyMember';
import Tracker from './components/Tracker';
import Family from './components/Families';
import Forum from './components/Forum';
import Database from './components/Database';
import ForumExample from './components/ForumExample'
import Home from './Home';
import AdminLogin from './admin-copyright';


import DietPlan from "./DietPlan";

function App() {
  return (
    <div className="App">

    
    <BrowserRouter>
    
      <Link to={'/home'}>HIA Home</Link>

      <Switch>
        <Route path = '/home' component={Home}/>
        <Route path = '/adminlogin' component={AdminLogin}/>
        <Route path='/login' component={Copyright}/> 
        <Route path='/dashboard' component={Dashboard}/> 
        <Route path='/tracker' component={Tracker}/> 
        <Route path='/contact' component={Copyright}/> 
        <Route path='/tracker' component={Tracker}/> 
        <Route path='/familyMember' component={FamilyMember}/> 
        <Route path='/family' component={Family}/>
        <Route path='/database' component={Database}/>
        <Route path='/forum' component={Forum}/> 
        <Route path='/forumExample' component={ForumExample}/> 
        <Route path="/personal_goals" component={PersonalGoals} />
        <Route path="/diet_plan" component={DietPlan} /> 

      </Switch>
    
    </BrowserRouter>
    </div>
  );
}

export default App;

