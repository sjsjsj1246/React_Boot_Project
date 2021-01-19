import React from 'react';
import Users from './components/users';
import styles from './app.module.css';
import { UsersProvider } from './users_context';

const App = (props) => {
  return (
    <div className={styles.container}>
      <UsersProvider>
        <Users />
      </UsersProvider>
    </div>
  );
};

export default App;
