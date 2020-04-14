import React from 'react'

import { uniqueId } from '../util/id_generator'

import styles from './form.css'
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        };
      
    }


    render(){
        if (!form){
            return(null)
        }
        else return(
        <div id='note-form'>
            <div id='form-title' contentEditable='true' role='textbox' value={this.state.title} placeholder='Title'>
         
            </div>
            <div contentEditable='true' role='textbox' id='form-tan' value={this.state.body} placeholder='Take a note...'>

            </div>
            <div id='form-close' onClick={this.handleSubmit}>Close</div>
        </div>
        )
    }
}

export default Form;