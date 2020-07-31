import React from 'react';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import SelectForm from './SelectForm';

//THE FORM WHICH EXPANDS ONCE YOU CLICK ADD NOTES IN COMPONENT ADDNOTE
class NoteForm extends React.Component{

    static contextType = NotefulContext;

    submitNote(e){
        e.preventDefault();

        const url='http://localhost:8000/notes';

        const note = {
            "name": this.context.newNote.name,
            "modified": this.modifiedDate(),
            "folder_id": this.context.newNote.folder_id,
            "content": this.context.newNote.content
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if(note.name.trim() === ''){
            this.context.noteToggleErr();
        }else{
        fetch(url, options)
        .then(res => {
            if(!res.ok){
                throw new Error("something went wrong")
            }
            return res.json();
        })
        .then(data => this.context.addNote(data))
        .catch(err => "something went wrong");
        }
    }

    modifiedDate = () => {
        let today = Date();

        return today.toString()
    }

    folderOptions = () => {
        return this.context.folders.map((folder, index) => {
            return <SelectForm 
                folderName = {folder.name}
                index= {index}
                folder_id = {folder.id}
            />
        })
    }


    render(){

        return(
            <>
            <form onSubmit={e => this.submitNote(e)}>
                <legend>Add Note</legend>

                <label htmlFor="Name">Name:</label>
                {this.context.noteErr && <p className='error'>*name cannot be empty space*</p>}
                <input type="text" id='name' onChange={e => this.context.updateNote(e.target.value, e.target.id)}/>

                <label htmlFor="Content">Content:</label>
                <input type="text" id='content' onChange={e => this.context.updateNote(e.target.value, e.target.id)}/>

                <label htmlFor="Folder">Folder</label>  
                <select id="folder_id" value={this.context.newNote.folder_id} onChange={e => this.context.updateNote(e.target.value, e.target.id)}>
                    {this.folderOptions()}
                </select>
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