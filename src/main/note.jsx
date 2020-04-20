import React from 'react'


class Note extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            body: props.body
        }
    }

    render(){
        return(
            <div id='note-top'>
                
            </div>
        )
    }
}

export default Note