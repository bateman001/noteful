import React from 'react';
import {Link} from 'react-router-dom';

class FolderList extends React.Component{


render(){
    return(
        
        <li className="folder" key={`folder${this.props.id}`}>
           <Link to={`/notes/${this.props.id}`}>{this.props.name}</Link>
        </li>
    );
}
}

export default FolderList;