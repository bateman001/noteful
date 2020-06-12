import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class FolderList extends React.Component{


render(){
    return(
        
        <li className="folder" key={`folder${this.props.index}`}>
           <Link to={`/notes/${this.props.id}`}>{this.props.name}</Link>
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