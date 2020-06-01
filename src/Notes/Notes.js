import React from 'react';
import NotesList from './NotesList';

class Notes extends React.Component{

noteList = () => {
    let notes = this.props.store.notes.filter(note => note.folderId === this.props.match.params.id);

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