import { combineReducers } from 'redux';

import formReducer from './form_reducer';
import todosReducer from './todos_reducer';


const rootReducer = combineReducers({
  formReducer,
  todosReducer
});

export default rootReducer;