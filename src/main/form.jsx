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
      this.poopScoop = this.poopScoop.bind(this)
    }

    handleSubmit(e){
        debugger
        this.setState({title: 'poop'})
        console.log(this.state.title)
        document.getElementById('note-form').classList.add('hidden')
        // let skin = this
    }

    poopScoop(e){
        debugger
        
    }

  


    render(){
        // let fro
        // if (!form){
        //     return(null)
        // }
        // else 
        return(
        <div id='note-form' className='hidden'>
            <div id='form-title' contentEditable='true' role='textbox' value={this.state.title} placeholder='Title'
                onChange={e => this.poopScoop(e)}
            ></div>
            <div contentEditable='true' role='textbox' id='form-tan' value={this.state.body} 
            onChange={this.poopScoop()} placeholder='Take a note...'>

            </div>
            <div id='form-close' onClick={e => this.handleSubmit(e)}>Close</div>
        </div>
        )
    }
}

export default Form;