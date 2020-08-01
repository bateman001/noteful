import React from 'react';
import NotefulContext from '../NotefulContext';
import config from '../config'

//FORM WHICH EXPANDS ONCE THE ADD FOLDER BUTTON IS CLICKED
class FolderForm extends React.Component{

    static contextType = NotefulContext;

    submitFolder(event){
        event.preventDefault();
        
        const url= config.API_ENDPOINT + '/folders';

        const folder = {
            "name": this.context.newFolder.name,
            "date_created": new Date().toLocaleDateString() 
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if(folder.name.trim() === ''){
            this.context.folderToggleErr()
        }else{
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
    }

    render(){
        return(
            <>
            <form className="folderForm" onSubmit={e => this.submitFolder(e)}>
                <legend>Add New Folder</legend>

                <label htmlFor="newFolder">Name:</label>
                {this.context.foldererr && <p className="error">*name field cannot be white space*</p>}
                <input type="text" id="newFolder" onChange={e => this.context.updateFolder(e.target.value)} required/>
                <input type="submit" value="Submit"/>
            </form>
            </>
        )
    }
}

export default FolderForm;