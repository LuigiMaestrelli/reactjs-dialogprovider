import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import SomeView from './SomeView';

const App = () => {
    return (
        <div className='App'>
            <CssBaseline />
            <SomeView />
        </div>
    );
};

export default App;
