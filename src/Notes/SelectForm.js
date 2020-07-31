import React from 'react';
import PropTypes from 'prop-types';

class SelectForm extends React.Component{

    render(){
        return(
            <>
            <option key={this.props.index} value={this.props.folder_id}>{this.props.folderName}</option>
            </>
        )
    }
}

SelectForm.propType = {
    index: PropTypes.number,
    folderId: PropTypes.string,
    folderName: PropTypes.string
}

export default SelectForm;