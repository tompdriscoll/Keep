import React from 'react'

import styles from './main.css'
import {Form} from './form'
export function Main(){

    return(
        <div id='okay'>
            <div id='tan-wrapper'>
                <button id='tan-button'>
                    <span id='tan-text'>Take a note...</span>
                    
                </button>
                <Form/>
            </div>
            
        </div>
    )
}