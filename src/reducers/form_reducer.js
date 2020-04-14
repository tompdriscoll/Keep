import { OPEN_FORM, CLOSE_FORM } from "../actions/form_actions";


export default function formReducer(state = null, action) {
  switch (action.type) {
    case OPEN_FORM:
      return action.form;
    case CLOSE_FORM:
      return null;
    default:
      return state;
  }
  
}