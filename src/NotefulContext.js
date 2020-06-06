import React from 'react';

const NotefulContext = React.createContext({
    store: {},
    match: {},
    history: {}
});

export default NotefulContext;