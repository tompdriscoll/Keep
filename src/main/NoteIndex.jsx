import React from 'react'
import Note from './note'

import styles from './noteIndex.css'

const NoteIndex = props => {
    let notes = props.notes.map( note => 
       
        <Note title={note.title} body={note.body} time={note.time}/>
    )

    return(
        <div id='note-index-top'>
            {notes}
        </div>
    )
}

export default NoteIndex