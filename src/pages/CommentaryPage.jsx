import React, {Component, Fragment} from 'react';

import Commentary from '../containers/CommentaryContainer.jsx';
import Header from '../containers/HeaderContainer';
import Footer from '../containers/FooterContainer';

export default class CommentaryPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Commentary />
                <Footer />
            </Fragment>
        );
    }
}
