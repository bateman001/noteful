import React from 'react';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';

class DeleteNote extends React.Component{

    static contextType = NotefulContext;

    deleteNote(note){
        const url=`http://localhost:9090/notes/${note}`;

        fetch(url, {method: 'DELETE',
                    header: {
                        'content-type': 'application/json'
                    },
                })
        .then(response => {
            if (response.status !== 200){
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(() => {
            this.context.removeNote(note);
        })
        .catch(err => 'something went wrong');
    }

    render(){
        return(                
        <button id="delete" onClick={() => this.deleteNote(this.props.id)}>delete note</button>
        )
    }
}

DeleteNote.propType = {
    id: PropTypes.string
}

export default DeleteNote;