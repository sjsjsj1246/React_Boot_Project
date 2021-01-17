import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './components/todo_create';
import TodoHead from './components/todo_head';
import TodoList from './components/todo_list';
import TodoTemplate from './components/todo_template';
import { TodoProvider } from './todo_context';

const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

const App = (props) => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
};

export default App;
