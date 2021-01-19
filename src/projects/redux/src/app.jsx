import React from 'react';
import styles from './app.module.css';
import CounterContainer from './containers/counter_container';

const App = (props) => {
  return (
    <div className={styles.container}>
      <CounterContainer />
    </div>
  );
};

export default App;
