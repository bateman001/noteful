import React from 'react';
import Folder from './Folder/Folder';

class Main extends React.Component{

    render(){
        console.log(this.props);

    return(
        <div className="MainContent">
            <Folder {...this.props}/>
        </div>
    );
    }

}

export default Main;