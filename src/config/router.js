import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Header from '../components/header';

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route path='/gists/:id' component={Detail} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);


export default Router;
