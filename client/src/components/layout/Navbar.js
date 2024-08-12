import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;