import React from 'react';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

//COMPONENT WHICH DELETS THE NOTE
class DeleteNote extends React.Component{

    static contextType = NotefulContext;

    deleteNote(e, note){

        e.preventDefault();
        const url=`http://localhost:8000/notes/${note}`;

        fetch(url, {method: 'DELETE',
                    header: {
                        'content-type': 'application/json'
                    },
                })
        .then(response => {
            if (response.status !== 204){
                throw new Error(response.status);
            }
            return response;
        })
        .then(() => {
            if(this.context.folderClicked)
                this.context.history.push(`/folder/${this.context.folderClicked}`);
            else
                this.context.history.push('/');

            this.context.removeNote(note);

        })
        .catch(console.log);
    }

    render(){
        return(                
        <button id="delete" onClick={(e) => this.deleteNote(e, this.props.id)}>delete note</button>
        )
    }
}

DeleteNote.propType = {
    id: PropTypes.string
}

export default DeleteNote;