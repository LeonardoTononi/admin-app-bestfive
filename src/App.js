import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import './App.scss';

import UserNav from './components/User-nav/user-nav.component';
import AddPlace from './pages/Add-place/add-place.component';
import Dashboard from './pages/Dashboard/dashboard.component';
import Login from './pages/Login/login.component';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <PrivateRoute component={UserNav} />
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/add-place' component={AddPlace} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
