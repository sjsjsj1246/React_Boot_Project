import React from 'react';
import styles from './app.module.css';
import CounterContainer from './containers/counter_container';
import TodosContainer from './containers/todos_container';

const App = (props) => {
  return (
    <div className={styles.container}>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
