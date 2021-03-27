import React from 'react';
import './App.css';
import Home from './components/Home';
import RepositoryDetail from './components/RepositoryDetail';

import { Router as BrowserRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:repositoryId" exact component={RepositoryDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
