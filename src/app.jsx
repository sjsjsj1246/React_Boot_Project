import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import Main from './components/main/main';
import TodoListApp from './projects/todo_list/src/app';
import ConnectApiApp from './projects/connect_API/src/app';
import Redux from './projects/redux/src/index';
import Typescript from './projects/typescript/src/app';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/todoList">
          <TodoListApp />
        </Route>
        <Route path="/connectAPI">
          <ConnectApiApp />
        </Route>
        <Route path="/redux">
          <Redux />
        </Route>
        <Route path="/typescript">
          <Typescript />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
