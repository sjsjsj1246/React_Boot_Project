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
        <a href="https://youtu.be/hqwDFwqyWkE">하나</a>
        <a href="https://youtu.be/hqwDFwqyWkE?t=1">둘</a>
        <a href="https://youtu.be/hqwDFwqyWkE?t=1.5">셋</a>
        <a href="https://youtu.be/hqwDFwqyWkE?t=2">야!</a>
      </nav>
    </header>
  );
};

export default Header;
