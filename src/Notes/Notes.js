import React from 'react';
import NotesList from './NotesList';
import NotefulContext from '../NotefulContext';

class Notes extends React.Component{

static contextType = NotefulContext;

noteList = () => {
    let notes = this.context.notes.filter(note => note.folderId === this.props.noteId);

    return notes.map(note => {
        return <NotesList 
                id={note.id}
                name={note.name}
                modified={note.modified}
                content={note.content}
                />
    })
}
render(){
    return(
        <div className="NotesContent">
            <ul>
                {this.noteList()}
            </ul>
            <button id="addNote">Add Notes</button>
        </div>
    );
}
}

export default Notes;