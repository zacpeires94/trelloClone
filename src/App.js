import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './containers'
import './App.css';

const App = () => {

  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
    </div>
  )
}

export default App;
