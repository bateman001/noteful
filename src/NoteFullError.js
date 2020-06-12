import React from 'react';

class NoteFullError extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(err){
        return {hasError: true}
    }
    render(){
        if(this.state.hasError){
            return <h2>Could not display data</h2>
        }
        return this.props.children;
    }
}

export default NoteFullError;