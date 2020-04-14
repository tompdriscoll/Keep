import React from 'react'

import styles from './main.css'
import FormContainer from './form_container'
class Main extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
    return(
        <div id='okay'>
            <div id='tan-wrapper'>
                <button id='tan-button' onClick={form => this.props.openForm(form)}>
                    <span id='tan-text'>Take a note...</span>
                    
                </button>
                <FormContainer />
            </div>
            
        </div>
    )}
}

export default Main;