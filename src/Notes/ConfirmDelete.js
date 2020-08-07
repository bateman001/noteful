import React from 'react';

const ConfirmDelete = (props) => {

    return(
    <section className='delete'>
        <p>Are you sure you'd like to delete this note?</p>
        <div className='button-flex'>
            <button onClick={props.deleteNote}>Yes</button>
            <button onClick={props.cancelDelete}>No</button>
        </div>
    </section>
    )
}

export default ConfirmDelete;