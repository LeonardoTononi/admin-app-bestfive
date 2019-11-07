import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss'
import AddPlace from './pages/Add-place/add-place.component'



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={()=> <AddPlace/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
