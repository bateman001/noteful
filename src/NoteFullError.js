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
        const message = this.props.message || "could not display data"
        if(this.state.hasError){
        return <h2>{message}</h2>
        }
        return this.props.children;
    }
}

export default NoteFullError;