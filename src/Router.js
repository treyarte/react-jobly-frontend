import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies.js';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';
import Login from './Login';

const Router = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home loggedIn={false} />
      </Route>
      <Route exact path='/companies'>
        <Companies />
      </Route>
      <Route path='/companies/:handle'>
        <Company />
      </Route>
      <Route exact path='/jobs'>
        <Jobs />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route>
        <p>404 Page placeholder</p>
      </Route>
    </Switch>
  );
};

export default Router;
