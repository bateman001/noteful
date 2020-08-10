import React from 'react';
import FolderList from './FolderList';
import NotefulContext from '../NotefulContext';
import NoteFullError from '../NoteFullError';

//RENDERS ALL FOLDERS IN THE ARRAY 
class RenderFolder extends React.Component{

static contextType = NotefulContext;


folder = () => {
    return this.context.folders.map((folder, index) => {
       return <FolderList
            key={folder.id}
            clicked={this.context.folderClicked === folder.id}
            index= {index}
            id={folder.id}
            name={folder.name}
        />

    })
}

render(){

    return(
        <>
        <div className="folderContent">
            <legend>
                <h1>Folders</h1>
            </legend>
            <NoteFullError message='cannot display folder'>
            <ul>
                {this.folder()}
            </ul>
            </NoteFullError>
        </div>
        </>
    );
}
}

export default RenderFolder;