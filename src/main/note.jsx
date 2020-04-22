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

    triggerFocus(e){
        e.currentTarget.lastChild.classList.toggle('hidden')
        e.currentTarget.firstChild.classList.toggle('hidden')
    }

    trigger

    render(){
        return(
            <div className='note-top' onClick={ e => this.triggerFocus(e) }>
                <div className='note-prev' >
                    <div className='note-title'>{this.state.title}</div>
                    <div className='note-body'>{this.state.body}</div>
                </div> 
                <div className='note-zoom hidden' >
                    <div className='zoom-title'>{this.state.title}</div>
                    <div className='zoom-body'>{this.state.body}</div>
                </div>
            </div>
        )
    }
}

export default Note