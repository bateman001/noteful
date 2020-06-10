import React from 'react';

class NoteForm extends React.Component{

    render(){
        return(
            <>
            <form>
                <legend>Add Note</legend>
                <label htmlFor="Title">Title</label>
                <input type="text" id='title'/>

                <label htmlForm="Content">Content</label>
                <input type="text" id='content'/>
            </form>
            </>
        )
    }
}

export default NoteForm;