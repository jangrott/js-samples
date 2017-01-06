import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App/App'
import todo from './reducers/todo'

const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
