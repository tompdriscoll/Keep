import connect from 'react-redux'
import Form from './form'

import { receiveTodos, receiveTodo } from '../actions/todo_actions';
import { allTodos } from '../reducers/selectors';

const msp = state => ({
    todos: allTodos(state),
    state
  });
  
  const mdp = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
  });
  
  export default connect(msp, mdp)(TodoList);
  