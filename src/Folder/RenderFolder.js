import React from 'react';
import FolderList from './FolderList';
import NotefulContext from '../NotefulContext';
import AddFolder from './AddFolder';
import NoteFullError from '../NoteFullError';

//RENDERS ALL FOLDERS IN THE ARRAY 
class RenderFolder extends React.Component{

static contextType = NotefulContext;


folder = () => {
    return this.context.folders.map((folder, index) => {
       return <FolderList
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
            <NoteFullError message='cannot display folder'>
            <ul>
                {this.folder()}
            </ul>
            </NoteFullError>
             <AddFolder />
        </div>
        </>
    );
}
}

export default RenderFolder;