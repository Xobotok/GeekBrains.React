import React, {PureComponent, Fragment} from 'react';

import UserContainer from '../containers/UserContainer';
import Header from '../containers/HeaderContainer';
import Footer from '../containers/FooterContainer';


export default class CommentaryPage extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <UserContainer />
                <Footer />
            </Fragment>
        );
    }
}
