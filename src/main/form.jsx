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
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        document.getElementById('note-form').classList.add('hidden')
    }

    


    render(){
        // let fro
        // if (!form){
        //     return(null)
        // }
        // else 
        return(
        <div id='note-form' className='hidden'>
            <div id='form-title' contentEditable='true' role='textbox' value={this.state.title} placeholder='Title'
                onChange={this.poopScoop()}
            ></div>
            <div contentEditable='true' role='textbox' id='form-tan' value={this.state.body} placeholder='Take a note...'>

            </div>
            <div id='form-close' onClick={() => this.handleSubmit()}>Close</div>
        </div>
        )
    }
}

export default Form;