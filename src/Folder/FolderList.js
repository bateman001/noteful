import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import NotefulContext from '../NotefulContext';

//LISTED FOLDER WITH LINK ATTACHED
class FolderList extends React.Component{
static contextType = NotefulContext;

render(){
    const className = this.props.clicked ? 'folder clicked' : 'folder';
    return(
        <li className={className} id={`folder${this.props.index}`} key={`folder${this.props.index}`}>
           <Link key={`link${this.props.index}`} to={`/folder/${this.props.id}`} onClick={() => this.context.changeClicked(this.props.id)}>{this.props.name}</Link>
        </li>
        
    );
}
}

FolderList.propType = {
    index: PropTypes.number,
    id: PropTypes.string,
    name: PropTypes.name
}

export default FolderList;