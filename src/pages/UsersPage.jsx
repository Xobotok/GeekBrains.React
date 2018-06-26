import React, {PureComponent, Fragment} from 'react';
import { HashRouter } from 'react-router-dom'

import Users from '../containers/UsersContainer';
import Header from '../containers/HeaderContainer';
import Footer from '../containers/FooterContainer';

export default class CommentaryPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <Users />
                <Footer />
            </Fragment>
        );
    }
}
