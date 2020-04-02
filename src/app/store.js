import { createStore } from 'redux';
import todosReducer from '../reducers/todos_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(todosReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
