import React from 'react';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import config from '../config';
import deleteIcon from '../images/icons8-delete-50.png';
import ConfirmDelete from './ConfirmDelete';

//COMPONENT WHICH DELETS THE NOTE
class DeleteNote extends React.Component{

    state={
        confirmDeleteHidden: false
        
    }

    static contextType = NotefulContext;

    deleteNote(note){

        const url= config.API_URL + `notes/${note}`;


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
            this.cancelDelete()
        })
        .catch(console.log);
    }

    cancelDelete = () => { 
        this.setState({
            confirmDeleteHidden: false,
        })
    }

        
    render(){
        return(   
            <>
            {this.state.confirmDeleteHidden && <ConfirmDelete
                                        deleteNote={() => this.deleteNote(this.props.id)}
                                        cancelDelete={this.cancelDelete} />}  

            <button id="delete" className='deleteNote' onClick={(e) => {
                this.setState({
                    confirmDeleteHidden: true
                })

            }}><img src={deleteIcon} alt='crossmark' /></button>
            </>
        )
    }
}

DeleteNote.propType = {
    id: PropTypes.string
}

export default DeleteNote;