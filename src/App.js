import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss'
import AddPlace from './pages/Add-place/add-place.component'
import DatabaseUI from './pages/DatabaseUI/databaseUI.component'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <AddPlace />} />
          <Route path="/database" component={DatabaseUI}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
