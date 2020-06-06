import React from 'react';
import {Link } from 'react-router-dom';

class NotesList extends React.Component{

    deleteNote(note){
        const url=`http://localhost:9090/notes/${note}`;

        fetch(url, {method: 'DELETE'})
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(err => 'something went wrong');
    }

    render(){
        return(
            <li className="note" key={this.props.id}>
                <Link to={`/notecard/${this.props.id}`}><h1>{this.props.name}</h1></Link>
                <p>Date modified on {this.props.modified}</p>
                <button id="delete" onClick={() => this.deleteNote(this.props.id)}>delete note</button>
            </li>
        )
    }
}

export default NotesList;