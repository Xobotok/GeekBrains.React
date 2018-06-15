import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import {navigation_list} from './modules/header/Header_consts';
import {review_items} from './modules/review/Review_consts';
import {mainblog_items} from './modules/mainblog/Mainblog_consts';
import {blogs_items} from './modules/blogs/Blogs_consts';
import {footer_items} from './modules/footer/Footer_consts';
import Header from 'modules/Header';
import Review from './modules/Review';
import Mainblog from './modules/Mainblog';
import Blogs from './modules/Blogs';
import Footer from './modules/Footer';

import './style.css';
class App extends Component {
    render() {
        return(
         <Fragment>
             <Header header_items = {navigation_list}/>
             <Review items = {review_items}/>
             <Mainblog items = {mainblog_items}/>
             <Blogs items = {blogs_items}/>
             <Footer items = {footer_items}/>
         </Fragment>
        )
    }
}

ReactDom.render(<App />, document.body);