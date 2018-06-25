import React, {Component, Fragment} from 'react';

import Header from '../containers/HeaderContainer';
import Review from '../containers/ReviewContainer';
import Mainblog from '../containers/MainblogContainer';
import Footer from '../containers/FooterContainer';

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Review />
                <Mainblog />
                <Footer />
            </Fragment>
        );
    }
}