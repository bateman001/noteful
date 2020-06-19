import React from 'react';
import NotefulContext from '../NotefulContext';
import NotesList from './NotesList';
import AddNote from './AddNote';
import NoteFullError from '../NoteFullError';

class AllNotes extends React.Component{

    static contextType = NotefulContext;

    notes = () => {
        return this.context.notes.map((note, index) => {
        return <NotesList 
        folderId={note.folderId}
        index={index} 
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
                <NoteFullError >
                    <ul>
                    {this.notes()}
                    </ul>
                </NoteFullError>
            <AddNote />
        </div>

        )
    }

}

export default AllNotes;