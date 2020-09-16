import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies.js';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';
import Login from './Login';
import SignUp from './SignUp';

const Router = ({ checkLogin, handleToken, token }) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home loggedIn={false} checkLogin={checkLogin} />
      </Route>
      <Route exact path='/companies'>
        <Companies checkLogin={checkLogin} />
      </Route>
      <Route path='/companies/:handle'>
        <Company checkLogin={checkLogin} />
      </Route>
      <Route exact path='/jobs'>
        <Jobs checkLogin={checkLogin} />
      </Route>
      <Route exact path='/profile'>
        <Profile checkLogin={checkLogin} token={token} />
      </Route>
      <Route exact path='/login'>
        <Login handleToken={handleToken} checkLogin={checkLogin} />
      </Route>
      <Route exact path='/sign-up'>
        <SignUp handleToken={handleToken} checkLogin={checkLogin} />
      </Route>
      <Route exact path='/logout'>
        <Redirect to='/' />
      </Route>
      <Route>
        <p>404 Page placeholder</p>
      </Route>
    </Switch>
  );
};

export default Router;
