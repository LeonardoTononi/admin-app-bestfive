import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import './App.scss';

import Dashboard from './pages/Dashboard/dashboard.component';
import Login from './pages/Login/login.component';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
