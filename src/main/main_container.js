import {connect} from 'react-redux';
import Main from './main'

import {openForm, closeForm} from '../actions/form_actions'

const msp = state => ({
    state,
    form: false
  });

    
  const mdp = dispatch => ({
    openForm: () => dispatch(openForm())
  });
  
  export default connect(msp, mdp)(Main);
  