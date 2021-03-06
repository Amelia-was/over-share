import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className='bg-secondary mb-4 py-2 flex-row align-center'>
      <div className='container flex-row justify-space-between-lg justify-center align-center'>
        <div className='flex-column'>
        <Link to='/'>
          <h1>OverShare</h1>
        </Link>
        <h3>Let your bad internet opinions live forever.</h3>
        </div>

        <nav className='text-center p-2'>
          {/* conditionally show nav links */}
          {Auth.loggedIn() ? (
            <>
              <Link to='/profile'>Profile</Link>
              <a href='/' onClick={logout}>
                Logout
              </a>
            </>
          ) : (
              <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
              </>
            )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
