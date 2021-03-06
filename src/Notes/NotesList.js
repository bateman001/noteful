import React from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import DeletNote from './DeleteNote';

//NOTES IN SELECTED FOLDER
class NotesList extends React.Component{

    static contextType = NotefulContext;


    render(){
        return(
            <li className="note" key={this.props.index}>
                <div className='noteFlex'>
                    <Link to={`/notecard/${this.props.id}`}><h1>{this.props.name}</h1></Link>
                </div>
                <DeletNote 
                    id={this.props.id}
                    folder_id={this.props.folder_id}
                />
            </li>
        )
    }
}

NotesList.propType = {
    index: PropTypes.number,
    name: PropTypes.string,
    modified: PropTypes.string,
    id: PropTypes.string
}

export default NotesList;