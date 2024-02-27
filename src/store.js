import { createStore } from 'redux';
import {reducer} from './reducer';

const store = createStore(reducer);

store.dispatch({
    type: "taskAdded",
    payload: {
        task: "task1"
    }
})

store.dispatch({
  type: 'taskCompleted',
  payload: {
    id: '0',
  },
})

export default store;