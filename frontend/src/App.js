import React from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';
import './App.css';
import Router from './Router';
import NavBar from './NavBar';

function App() {
  const [token, setToken] = useLocalStorageState('token', '');

  const handleToken = (token) => {
    setToken({ token });
  };

  const checkLogin = () => {
    if (!token.token) {
      return false;
    }

    return true;
  };

  return (
    <div className='App'>
      <NavBar checkLogin={checkLogin} handleToken={handleToken} />
      <Router checkLogin={checkLogin} handleToken={handleToken} token={token} />
    </div>
  );
}

export default App;
