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
            <div className='note-top'>
                <div>
                </div> 
            </div>
        )
    }
}

export default Note