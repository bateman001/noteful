import React from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import NoteFullError from '../NoteFullError';
import DeleteNote from './DeleteNote';

//THE INDIVIDUAL NOTE 
class NoteCard extends React.Component{
    
    static contextType = NotefulContext;

    folder = () => {
        let noteCard = this.context.notes.find(note => note.id === +this.props.noteId);

        let folder_id = this.context.folders.find(folder => folder.id === noteCard.folder_id);

        return [noteCard, folder_id];
    }

    render(){
        
        return(
            <div className="NoteCard">
            <NoteFullError>

                <section className="folderInfo">
                <h1>Folder: {this.folder()[1].name} </h1>
                <Link to={`/folder/${this.folder()[1].id}`} id="goBack">Go Back</Link>

                </section>

                <section className="cardInfo">
                <h1>{this.folder()[0].name}</h1>
                <p>{this.folder()[0].content}</p>

                <DeleteNote id={this.folder()[0].id}/>
                </section>
            </NoteFullError>
            
            </div>
        )
    }
}

NoteCard.propType = {
    noteId: PropTypes.string
}

export default NoteCard;