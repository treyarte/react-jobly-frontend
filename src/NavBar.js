import React from 'react';

import { NavLink, useHistory } from 'react-router-dom';
import './NavBar.css';
import { Button } from 'reactstrap';

const NavBar = ({ checkLogin, handleToken }) => {
  const history = useHistory();

  const handleLogout = () => {
    handleToken('');
    history.push('/logout');
  };

  const loggedInLinks = checkLogin() ? (
    <ul>
      <li>
        <NavLink className='link' to='/companies'>
          Companies
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/jobs'>
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/profile'>
          Profile
        </NavLink>
      </li>
      <li>
        <Button className='link logout-btn' onClick={handleLogout}>
          Log Out
        </Button>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <NavLink className='link' to='/login'>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className='link' to='/sign-up'>
          Sign Up
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav>
      <div>
        <NavLink className='brand link' to='/'>
          Jobly
        </NavLink>
      </div>

      <div>{loggedInLinks}</div>
    </nav>
  );
};

export default NavBar;
