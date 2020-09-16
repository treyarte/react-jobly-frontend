import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ loggedIn, checkLogin }) => {
  const isLoggedIn = checkLogin();

  return (
    <>
      <div className='home'>
        <header className='home-header'>
          <h1>Jobly</h1>
          <p>All the jobs in one, convenient place.</p>
          {isLoggedIn ? (
            <h2 className='welcome-user-header'>Welcome Back!</h2>
          ) : (
            <Link className='btn btn-primary' to='/login'>
              Log in
            </Link>
          )}
        </header>
      </div>
    </>
  );
};

export default Home;
