import './style.css';

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import routes from './routes';
import store from './store';



class App extends Component {
    render() {

        return (
            <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                <Switch>
                    {routes.map((route, index) => <Route key = {index} {...route} />)}
                </Switch>
                </Fragment>
            </BrowserRouter>
            </Provider>
        )
    }
}
ReactDom.render(<App />, document.body);
