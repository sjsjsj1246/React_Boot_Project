import React from 'react';
import { Link } from 'react-router-dom';
import styles from './main.module.css';

const Main = (props) => {
  const projects = [
    {
      id: 'todoList',
      title: 'Todo List',
      explain: 'context API & styled-component',
    },
    {
      id: 'connectAPI',
      title: 'Connect API',
      explain: 'API, Async, Context',
    },
  ];
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
          {projects.map((item) => (
            <Link className={styles.projectItem} to={`/${item.id}`}>
              <h1 className={styles.projectTitle}>{item.title}</h1>
              <p className={styles.projectExplain}>{item.explain}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
