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
        e.currentTarget.parentNode.lastChild.classList.toggle('hidden')
        e.currentTarget.parentNode.firstChild.classList.toggle('hidden')
    }

    updateTitle(e){
        let title2 = e.currentTarget.value 
        this.state.title = title2
    }

    updateBody(e){
        let body = e.currentTarget.value        
        this.state.body = body
        console.log(this.state.body)
    }


    render(){
        return(
            <div className='note-top' >
                <div></div>
                <div className='note-prev' onClick={ e => this.triggerFocus(e) }>
                    <div className='note-title'>{this.state.title}</div>
                    <div className='note-body'>{this.state.body}</div>
                </div> 
                <div className='note-zoom hidden' >                
                    <input  className='zoom-title note-input'  type='text' placeholder={this.state.title} onChange={e => this.updateTitle(e)}></input>
                    <input  className='zoom-body note-input'  type='text' placeholder={this.state.body} onChange={e => this.updateBody(e)}></input>
                </div>
            </div>
        )
    }
}

export default Note