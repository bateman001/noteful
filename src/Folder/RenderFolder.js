import React from 'react';
import FolderList from './FolderList';
import NotefulContext from '../NotefulContext';
import AddFolder from './AddFolder';

class Folder extends React.Component{

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
            <ul>
                {this.folder()}
            </ul>
            <AddFolder />
        </div>
        </>
    );
}
}

export default Folder;