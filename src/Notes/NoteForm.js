import React from 'react';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';


class NoteForm extends React.Component{

    static contextType = NotefulContext;

    submitNote(e){
        e.preventDefault();

        const url='http://localhost:9090/notes';

        const note = {
            "name": this.context.newNote.name,
            "modified": this.context.newNote.modified,
            "folderId": this.props.folderId,
            "content": this.context.newNote.content
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
        .then(res => {
            if(!res.ok){
                throw new Error("something went wrong")
            }

            return res.json();
        })
        .then(data => this.context.addNote(data))
        .catch(err => "soemthing went wrong");
    }
    render(){

        return(
            <>
            <form onSubmit={e => this.submitNote(e)}>
                <legend>Add Note</legend>

                <label htmlFor="Name">Name</label>
                <input type="text" id='name' onChange={e => this.context.updateNote(e.target.value, e.target.id)}/>

                <label htmlFor="Content">Content</label>
                <input type="text" id='content' onChange={e => this.context.updateNote(e.target.value, e.target.id)}/>

                <label htmlFor="modified">modified</label>
                <input type="text" id='modified' onChange={e => this.context.updateNote(e.target.value, e.target.id)}/>
                
                <button type="submit">submit</button>
            </form>
            </>
        )
    }
}

NoteForm.propTypes = {
    folder: PropTypes.string

}

export default NoteForm;