import React from 'react';
import NotefulContext from '../NotefulContext';
import NoteForm from './NoteForm';
import PropTypes from 'prop-types';


class AddNote extends React.Component{

    static contextType = NotefulContext;

    render(){
        return(<>           
         <button id="addNote" onClick={() => this.context.showForm('note')}>Add Notes</button>
        {this.context.noteFormHidden && <NoteForm folderId={this.props.folderId}/>}
        </>)
    }
}

AddNote.propTypes = {
    folderId: PropTypes.string
}

export default AddNote;