import React from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class NoteCard extends React.Component{
    
    static contextType = NotefulContext;

    folder = () => {
        let noteCard = this.context.notes.find(note => note.id === this.props.noteId);

        let folderId = this.context.folders.find(folder => folder.id === noteCard.folderId);

        console.log(folderId.name);
        return [noteCard, folderId];
    }

    render(){
        console.log(this.folder()[0])
        return(
            <div className="NoteCard">
            <div className="folderInfo">
            <h1>Folder: {this.folder()[1].name} </h1>
            <Link to={`/notes/${this.folder()[1].id}`} id="goBack">Go Back</Link>

            </div>

            <div className="cardInfo">
            <h1>{this.folder()[0].name}</h1>
            <p>{this.folder()[0].content}</p>
            </div>
            
            </div>
        )
    }
}

export default NoteCard;