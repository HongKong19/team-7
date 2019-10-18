import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Copyright from './copyright';

function App() {
  return (
    <div className="App">
    <BrowserRouter>

      <Link to={'/contact'}>go to login</Link>
      <Switch>
        <Route path='/contact' component={Copyright}/> 
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

