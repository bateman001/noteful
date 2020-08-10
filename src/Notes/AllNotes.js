import React from 'react';
import NotefulContext from '../NotefulContext';
import NotesList from './NotesList';
import NoteFullError from '../NoteFullError';

class AllNotes extends React.Component{

    static contextType = NotefulContext;

    notes = () => {
        return this.context.notes.map((note, index) => {
        return <NotesList 
        key={note.id}
        folder_id={note.folder_id}
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
            <legend>
                <h1>Notes</h1>
            </legend>

                <NoteFullError >
                    <ul>
                    {this.notes()}
                    </ul>
                </NoteFullError>
        </div>

        )
    }

}

export default AllNotes;