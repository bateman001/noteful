import React from 'react';
import NotefulContext from '../NotefulContext';

class FolderForm extends React.Component{

    static contextType = NotefulContext;

    submitFolder(event){
        event.preventDefault();
        
        const folder = {
            "name": this.context.newFolder.name
        }

        console.log(folder);

        const options = {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
                'Content-Type': 'application/json'
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
            this.context.addFolder(data);
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