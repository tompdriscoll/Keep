import React from 'react'
import Note from './note'

const NoteIndex = props => {
    let notes = props.notes.map( note => 
       
        <Note title={note.title} body={note.body}/>
    )

    return(
        <div id='note-index-top'>
            {notes}
        </div>
    )
}

export default NoteIndex