import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

const NewLandingPage = () => {
    return (
        <div>Under Construction...</div>
    )
}
ReactDOM.render(
    <NewLandingPage />, 
    document.getElementById('root')
);
registerServiceWorker();
