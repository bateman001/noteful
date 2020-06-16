import React from 'react';

class SelectForm extends React.Component{

    render(){
        return(
            <>
            <option key={this.props.index} value={this.props.folderId}>{this.props.folderName}</option>
            </>
        )
    }
}

export default SelectForm;