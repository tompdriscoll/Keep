import {connect} from 'react-redux'
import Form from './form'

import { receiveTodos, receiveTodo } from '../actions/todo_actions';
import {closeForm} from '../actions/form_actions'
// import { allTodos } from '../reducers/selectors';

const msp = state => ({
    // todos: allTodos(state),
    state
  });
  
  const mdp = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    closeForm: () => dispatch(closeForm())
  });
  
  export default connect(msp, mdp)(Form);
  