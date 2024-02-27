import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './store';

store.dispatch({
  type: 'taskAdded',
  payload: {
    task: 'task1',
  },
})

store.dispatch({
  type: 'taskCompleted',
  payload: {
    id: '0',
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);