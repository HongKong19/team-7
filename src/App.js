import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';
import Tracker from './components/Tracker';
import FamilyMember from './components/FamilyMember';
import Family from './components/Families';
import Forum from './components/Forum';
import ForumExample from './components/ForumExample'


function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <Link to={'/contact'}>go to login</Link> <br></br>
      <Link to={'/tracker'}>go to track</Link> <br></br>
      <Link to={'/familyMember'}>go to family member</Link> <br></br>
      <Link to={'/family'}>go to family</Link> <br></br>
      <Link to={'/forum'}>go to forum</Link> <br></br>
      <Link to={'/forumExample'}>go to forum example</Link> <br></br>


      <Switch>
        <Route path='/contact' component={Copyright}/> 
        <Route path='/tracker' component={Tracker}/> 
        <Route path='/familyMember' component={FamilyMember}/> 
        <Route path='/family' component={Family}/>
        <Route path='/forum' component={Forum}/> 
        <Route path='/forumExample' component={ForumExample}/> 
        

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

