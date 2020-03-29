import React from 'react'

import styles from './form.css'
export function Form(){

    return(
        <div id='note-form'>
            <div id='form-title' contentEditable='true' role='textbox' placeholder='Title'>
         
            </div>
            <div contentEditable='true' role='textbox' id='form-tan' placeholder='Take a note...'>

            </div>
            <div id='form-close'>Close</div>
        </div>
    )
}