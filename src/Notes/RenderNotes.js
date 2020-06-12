import React from 'react';
import NotesList from './NotesList';
import NotefulContext from '../NotefulContext';
import AddNote from './AddNote';
import PropTypes from 'prop-types';


class Notes extends React.Component{

static contextType = NotefulContext;

noteList = () => {
    let notes = this.context.notes.filter(note => note.folderId === this.props.noteId);

    return notes.map((note, index) => {
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
                {this.noteList()}
                <AddNote folderId={this.props.noteId}/>
            </ul>
        </div>
    );
}
}

Notes.propTypes = {
    noteId: PropTypes.string,

}

export default Notes;