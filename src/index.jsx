import './style.css';

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import routes from './routes'


class App extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(routes);
        return (
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => <Route key = {index} {...route} />)}
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDom.render(<App />, document.body);
