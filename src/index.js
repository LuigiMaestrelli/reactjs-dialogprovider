import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';
import DialogProvider from './components/DialogProvider';

ReactDOM.render(
    <React.StrictMode>
        <DialogProvider>
            <App />
        </DialogProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
