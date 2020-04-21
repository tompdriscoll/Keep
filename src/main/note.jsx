import React from 'react'
import styles from './note.css'

class Note extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            body: props.body
        }
    }

    render(){
        return(
            <div className='note-top'>
                <div>
                    <input type='text' className='note-title note-input' value={this.state.title}></input>
                    <input type='text' className='note-body note-input'value={this.state.body}></input>
                </div> 
            </div>
        )
    }
}

export default Note