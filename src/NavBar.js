import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink className='brand link' to='/'>
          Jobly
        </NavLink>
      </div>

      <div>
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
            <NavLink className='link' to='/login'>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
