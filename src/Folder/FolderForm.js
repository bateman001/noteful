import React from 'react';
import NotefulContext from '../NotefulContext';

class FolderForm extends React.Component{

    static contextType = NotefulContext;

    submitFolder(event){
        event.preventDefault();
        
        const folder = {
            "name": this.context.newFolder.name
        }

        const options = {
            method: 'POST',
            body: folder,
            header: {
                'content-type': 'application/json'
            }
        }

        const url='http://localhost:9090/folders';

       fetch(url, options)
       .then(res => {
           if(!res.ok){
               throw new Error('Something went wrong');
           }
           return res.json();
        })
        .then(data => {
           console.log(data);
            // this.context.addFolder(options.folder);
        }).catch()

    }

    render(){

        return(
            <>
            <form className="folderForm" onSubmit={e => this.submitFolder(e)}>
                <legend>Add New Folder</legend>

                <label htmlFor="newFolder">Name</label>
                <input type="text" id="newFolder" onChange={e => this.context.updateFolder(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
            </>
        )
    }
}

export default FolderForm;