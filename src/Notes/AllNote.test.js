import React from 'react';
import AllNotes from './AllNotes';
import ReactDom from 'react-dom';


it('renders without fail', () => {
    const div = document.createElement('div');
    ReactDom.render(<AllNotes />, div);
    ReactDom.unmountComponentAtNode(div);
});