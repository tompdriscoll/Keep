import {connect} from 'react-redux';
import Main from './main'

import {openForm, closeForm} from '../actions/form_actions'

const msp = state => ({
    state
  });

    
  const mdp = dispatch => ({
    openForm: form => dispatch(openForm(form))
  });
  
  export default connect(msp, mdp)(Main);
  