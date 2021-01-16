import React from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.css';

const Main = (props) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.introImg}
        src="https://i.postimg.cc/LXNRkJXK/sky.jpg"
        alt="intro"
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>React Boot Projct</h1>
          <p>React, Redux, typescript...</p>
        </div>
        <div className={styles.projectList}>
          <Link to="/">Context API</Link>
          <Link to="/">TypeScript</Link>
          <Link to="/">Redux</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
