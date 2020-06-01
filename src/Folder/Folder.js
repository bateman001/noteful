import React from 'react';
import FolderList from './FolderList';

class Folder extends React.Component{


folder = () => {
    return this.props.store.folders.map((folder, index) => {
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