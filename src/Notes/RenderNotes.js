import React from 'react';
import NotesList from './NotesList';
import NotefulContext from '../NotefulContext';
import AddNote from './AddNote';
import NoteFullError from '../NoteFullError';
import PropTypes from 'prop-types';

//RENDERS NOTES FOR FOLDER BY MATCHING FOLDER IDS
class RenderNotes extends React.Component{

static contextType = NotefulContext;

noteList = () => {
    let notes = this.context.notes.filter(note => note.folderId === this.props.folderId);

    return notes.map((note, index) => {
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
            <ul>
                <NoteFullError message='cannot display notes'>
                 {this.noteList()}
                </NoteFullError>
                <AddNote />
            </ul>
        </div>
    );
}
}

RenderNotes.propType = {
    folderId: PropTypes.string
}


export default RenderNotes;