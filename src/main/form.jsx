import React, {useState} from 'react'

import styles from './form.css'

// class Form extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             title: "",
//             body: "",
            
//         };
//       this.handleSubmit = this.handleSubmit.bind(this)
      
//     }

function Form(props){ 
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [time, setTime] = useState(JSON.stringify(new Date))
    
    const handleSubmit = () => {
        if (title != '' || body != ""){
            let note = {title, body, time}
            
            props.addNote(note)
        }
        document.getElementById('note-form').classList.add('hidden')

    }

    // updateTitle(e){
    //     let title2 = e.currentTarget.value 
    //     this.state.title = title2
    // }

    // updateBody(e){
    //     let body = e.currentTarget.value        
    //     this.state.body = body
    // }

  


    // render(){
 
        return(
        <div id='note-form' className='hidden'>
            <div id='form-title'  role='textbox' value={title} placeholder='Title'>
                {/* <input id='real-title' type='text' placeholder='Title' onChange={e => this.updateTitle(e)}></input> */}
                <input id='real-title' type='text' placeholder='Title' onChange={ e => setTitle(e.currentTarget.value)}></input>
            </div>
            <div  role='textbox' id='form-tan' value={body} placeholder='Take a note...'>
                {/* <input id='real-tan' type='text' onChange={e => this.updateBody(e)} placeholder='Take a note...'></input> */}
                <input id='real-tan' type='text' onChange={e => setBody(e.currentTarget.value)} placeholder='Take a note...'></input>
            </div>
            <div id='zoom-time' className=''></div>
            <div id='form-close' className='close-button'onClick={handleSubmit}>Close</div>
        </div>
        )
    // }
}

export default Form;