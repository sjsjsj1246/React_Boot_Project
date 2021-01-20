import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools()); // 스토어를 만듭니다.
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Index;
