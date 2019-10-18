import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';
import Dashboard from './Dashboard';
import PersonalGoals from "./PersonalGoals";
import FamilyMember from './components/FamilyMember';
import Family from './components/Families';
import Forum from './components/Forum';
import ForumExample from './components/ForumExample'
import Home from './Home';
import AdminLogin from './admin-copyright';


import DietPlan from "./DietPlan";

function App() {
  return (
    <div className="App">

    

    <BrowserRouter>
    
      <Link to={'/home'}>go to site</Link>
      <Link to={'/login'}>go to login</Link>
      <Link to={'/dashboard'}>go to navbar</Link>
      <Link to={'/contact'}>go to login</Link> <br></br>
      <Link to={'/tracker'}>go to track</Link> <br></br>
      <Link to={'/familyMember'}>go to family member</Link> <br></br>
      <Link to={'/family'}>go to family</Link> <br></br>
      <Link to={'/forum'}>go to forum</Link> <br></br>
      <Link to={'/forumExample'}>go to forum example</Link> <br></br>
      <Link to={"/personal_goals"}>go to personal goals </Link>
      <Link to={"/diet_plan"}>go to diet plan</Link>

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

