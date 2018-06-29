import './style.css';

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import routes from './routes';



class App extends Component {
    render() {

        return (
            <BrowserRouter>
                <Fragment>
                <Switch>
                    {routes.map((route, index) => <Route key = {index} {...route} />)}
                </Switch>
                </Fragment>
            </BrowserRouter>
        )
    }
}
ReactDom.render(<App />, document.body);
