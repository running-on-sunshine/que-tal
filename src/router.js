import React from 'react';
import Homepage from './homepage';
import WassupScreen from './wassup-screen';
import Profile from './profile';
import About from './about';
import NotFound from './not-found';
import { HashRouter, Route, Switch } from 'react-router-dom';

let NavBar = () => 
    <nav>
        <a href="#/wassups">Feed</a>
        <a href="#/profile">Profile</a>
        <a href="#/about">About</a>
    </nav>

let Router = () =>
    <HashRouter>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/wassups" component={Homepage} />
                <Route exact path="/wassups/:id" component={WassupScreen} />
                <Route path="/about" component={About} />
                <Route path="/profile" component={Profile} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;