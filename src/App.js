import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';
import PersonalGoals from "./PersonalGoals";

function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <Link to={'/contact'}>go to login</Link>
      <Link to={"/personal_goals"}>go to personal goals </Link>

      <Switch>
        <Route path='/contact' component={Copyright}/>
        <Route path="/personal_goals" component={PersonalGoals} />
      </Switch>
       

    </BrowserRouter>
    </div>
  );
}

export default App;

