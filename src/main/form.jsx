import React from 'react'
import styles from './form.css'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        };
      this.handleSubmit = this.handleSubmit.bind(this)
      this.updateTitle = this.updateTitle.bind(this)
    }

    handleSubmit(e){
        document.getElementById('note-form').classList.add('hidden')
    }

    updateTitle(e){
        let title = e.currentTarget.value        
        this.setState({title: {title}})
        console.log(this.state.title)
    }

    updateBody(e){
        let body = e.currentTarget.value        
        this.setState({body: {body}})
        console.log(this.state.body)
    }

  


    render(){
 
        return(
        <div id='note-form' className='hidden'>
            <div id='form-title'  role='textbox' value={this.state.title} placeholder='Title'>
                <input id='real-title' type='text' placeholder='Take a note...' onChange={e => this.updateTitle(e)}></input>
            </div>
            <div  role='textbox' id='form-tan' value={this.state.body} placeholder='Take a note...'>
                <input id='real-tan' type='text' onChange={e => this.updateBody(e)}></input>
            </div>
            <div id='form-close' onClick={e => this.handleSubmit(e)}>Close</div>
        </div>
        )
    }
}

export default Form;