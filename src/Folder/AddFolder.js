import React from 'react';
import NotefulContext from '../NotefulContext';
import FolderForm from './FolderForm';

class AddFolder extends React.Component{

    static contextType = NotefulContext;

    render(){
        return(
        <>          
        <button id="addFolder" onClick={() => this.context.showForm('folder')}>Add Folder</button>
        {this.context.folderFormHidden && <FolderForm />}
        </>
        )
    }
}

export default AddFolder;