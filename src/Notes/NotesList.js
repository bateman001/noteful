import React from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import DeletNote from './DeleteNote';


class NotesList extends React.Component{

    static contextType = NotefulContext;


    render(){
        return(
            <li className="note" key={this.props.index}>
                <Link to={`/notecard/${this.props.id}`}><h1>{this.props.name}</h1></Link>
                <p>Date modified on {this.props.modified}</p>
                <DeletNote id={this.props.id}/>
            </li>
        )
    }
}

NotesList.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    modified: PropTypes.string,
    id: PropTypes.string


}

export default NotesList;