import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';
import AddPlace from './pages/Add-place/add-place.component';
import Dashboard from './pages/Dashboard/dashboard.component';
import Login from './pages/Login/login.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/add-place' component={AddPlace} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
