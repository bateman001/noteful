import React from 'react';
import NotefulContext from '../NotefulContext';
//import NoteFullError from '../NoteFullError';
import NotesList from './NotesList';
import AddNote from './AddNote';

class AllNotes extends React.Component{

    static contextType = NotefulContext;

    notes = () => {
        return this.context.notes.map((note, index) => {
        return <NotesList 
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
            <ul>
                 {this.notes()}
            </ul>
            <AddNote />
        </div>

        )
    }

}

export default AllNotes;