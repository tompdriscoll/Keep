import React from 'react'

import styles from './form.css'
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveTodo(todo);
        console.log('spongebob parties to hard and dies')
        this.setState({
            title: "",
            body: ""
          }); // reset form
    }

    render(){
        return(
        <div id='note-form'>
            <div id='form-title' contentEditable='true' role='textbox' value={this.state.title} placeholder='Tittle'>
         
            </div>
            <div contentEditable='true' role='textbox' id='form-tan' value={this.state.body} placeholder='Take a note...'>

            </div>
            <div id='form-close' onClick={this.handleSubmit}>Close</div>
        </div>
        )
    }
}

export default Form;