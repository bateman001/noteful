import React from 'react';
import {Link } from 'react-router-dom';

class NotesList extends React.Component{

    render(){
        return(
            <li className="note" key={this.props.id}>
                <Link to={`/notecard/${this.props.id}`}><h1>{this.props.name}</h1></Link>
                <p>Date modified on {this.props.modified}</p>
                <button id="delete">delete note</button>
            </li>
        )
    }
}

export default NotesList;