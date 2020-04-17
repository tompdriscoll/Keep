import React from 'react'

import styles from './main.css'
import FormContainer from './form_container'
class Main extends React.Component{
    constructor(props){
        super(props);

    }

    openF(){
        document.getElementById('note-form').classList.remove('hidden')
        // document.getElementById('form-title')
        document.getElementById('real-tan').focus()
    }

    render(){
    return(
        <div id='okay' >
            <div id='tan-wrapper'>
                <button id='tan-button' onClick={() => this.openF()}>
                    <span id='tan-text'>Take a note...</span>
                    
                </button>
                <FormContainer id='form' className='hidden'/>
            </div>
            
        </div>
    )}
}

export default Main;