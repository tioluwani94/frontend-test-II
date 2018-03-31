import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import routes from './scenes/routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        {routes}
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
