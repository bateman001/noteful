import React from 'react';
import NotefulContext from '../NotefulContext';
import NoteForm from './NoteForm';

//ADD NOTE BUTTONN WHICH EXPANDS THE NOTEFORM COMPONENT 
class AddNote extends React.Component{

    static contextType = NotefulContext;

    render(){
        return(<>           
         <button id="addNote" onClick={() => this.context.showForm('note')}>Add Notes</button>
        {this.context.noteFormHidden && <NoteForm />}
        </>)
    }
}


export default AddNote;