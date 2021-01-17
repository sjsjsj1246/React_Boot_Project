import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <header className={styles.container}>
      <Link to="/">
        <ion-icon name="logo-react" />
      </Link>
      <nav className={styles.nav}>
        <Link to="">hi</Link>
        <Link to="">hi</Link>
        <Link to="">hi</Link>
        <Link to="">hi</Link>
      </nav>
    </header>
  );
};

export default Header;
