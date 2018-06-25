import React, {Component, Fragment} from 'react';

import Blogs from '../containers/BlogsContainer';
import Header from '../containers/HeaderContainer';
import Footer from '../containers/FooterContainer';

export default class BlogsPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Blogs />
                <Footer />
            </Fragment>
        );
    }
}