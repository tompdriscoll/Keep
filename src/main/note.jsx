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
                    <h1>{this.state.title}</h1>
                    <h1>{this.state.body}</h1>
                </div> 
            </div>
        )
    }
}

export default Note