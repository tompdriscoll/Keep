import React from 'react'
import styles from './note.css'

class Note extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            body: props.body,
            time: JSON.parse(props.time)
        }
    }

    triggerFocus(e){
        e.currentTarget.parentNode.children[2].classList.toggle('hidden')
        e.currentTarget.parentNode.children[1].classList.toggle('hidden')
        document.getElementById('fake-modal').classList.toggle('hidden')
    }

    updateTitle(e){
        let title2 = e.currentTarget.value 
        this.state.title = title2
    }

    updateBody(e){
        let body = e.currentTarget.value        
        this.state.body = body
    }

    handleSubmit(e){
      
        
    }

    render(){
    
        let updateTime;
        let time = new Date(this.state.time)
        updateTime = 'edited ' + time.getHours() + ':' + time.getMinutes()
        return(
            <div className='note-top' >
                <div id='fake-modal' className='hidden' onClick={ e => this.triggerFocus(e) }></div>
                <div className='note-prev' onClick={ e => this.triggerFocus(e) }>
                    <div className='note-title'>{this.state.title}</div>
                    <div className='note-body'>{this.state.body}</div>
                </div> 
                <div className='note-zoom hidden' >                
                    <input  className='zoom-title note-input'  type='text' placeholder={this.state.title} onChange={e => this.updateTitle(e)}></input>
                    <input  className='zoom-body note-input'  type='text' placeholder={this.state.body} onChange={e => this.updateBody(e)}></input>
                    <div>{updateTime}</div>
                <div className='close-button' onClick={e => this.handleSubmit(e)}>Close</div>
                </div>
            </div>
        )
    }
}

export default Note