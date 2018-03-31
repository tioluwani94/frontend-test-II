import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../scenes/Home';
import Spotify from '../scenes/Spotify';
import Giphy from '../scenes/Giphy';
import App from '../App';

const routes = (
    <App>
        <Switch>
            <Route key="home" exact path="/" component={Home} />,
            <Route key="spotify" path="/spotify" component={Spotify} />,
            <Route key="giphy" path="/giphy" component={Giphy} />,
        </Switch>
    </App>
);

export default routes;
