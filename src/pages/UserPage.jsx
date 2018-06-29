import React, {PureComponent, Fragment} from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'

import UserContainer from '../containers/UserContainer';
import Header from '../containers/HeaderContainer';
import Footer from '../containers/FooterContainer';


export default class UserPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <BrowserRouter>
                    <Switch>
                <UserContainer />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </Fragment>
        );
    }
}
