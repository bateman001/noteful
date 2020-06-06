import React from 'react';
import FolderList from './FolderList';
import NotefulContext from '../NotefulContext';

class Folder extends React.Component{

static contextType = NotefulContext;

folder = () => {
    console.log(this.context)
    return this.context.folders.map((folder, index) => {
       return <FolderList
            index= {index}
            id={folder.id}
            name={folder.name}
            {...this.props}
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
            <button id="addFolder">Add Folder</button>
        </div>
        </>
    );
}
}

export default Folder;