import React from 'react'

import styles from './main.css'
import FormContainer from './form_container'
import NoteIndex from './NoteIndex'
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
        this.addNote = this.addNote.bind(this)
     
    }

    addNote(note){
        let newNotes = this.state.notes
        console.log(note)
        console.log(newNotes)
        newNotes.push(note)
        this.setState({notes: newNotes})
        console.log(this.state.notes)
       
    }

    openF(){
        document.getElementById('note-form').classList.remove('hidden')
        document.getElementById('real-tan').focus()
    }

 

    render(){

    return(
        <div id='okay' >
            <div id='tan-wrapper'>
                <button id='tan-button' onClick={() => this.openF()}>
                    <span id='tan-text'>Take a note...</span>
                    
                </button>
                <FormContainer addNote={this.addNote} id='form' className='hidden'/>
            </div>
                <NoteIndex notes={this.state.notes}/>
            
        </div>
    )}
}

export default Main;