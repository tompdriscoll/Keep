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
                    <p className='note-title'>{this.state.title}</p>
                    <p className='note-body'>{this.state.body}</p>
                </div> 
            </div>
        )
    }
}

export default Note