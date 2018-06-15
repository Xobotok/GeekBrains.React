import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './modules/Header.jsx';
import {navigation_list} from './modules/Header_consts';
import {review_items} from './modules/Review_consts';
import {mainblog_items} from './modules/Mainblog_consts';
import {blogs_items} from './modules/Blogs_consts';
import {footer_items} from './modules/Footer_consts';
import Review from './modules/Review.jsx';
import Mainblog from './modules/Mainblog.jsx';
import Blogs from './modules/Blogs.jsx';
import Footer from './modules/Footer.jsx';

import './style.css';

class SectionHeader extends Component {
  render () {
    return (
          <Header items = {navigation_list}/>
    );
  }
}
class SectionReview extends Component {
    render () {
        return (
            <Review items = {review_items}/>
        );
    }
}
class SectionMainblog extends Component {
    render () {
        return (
            <Mainblog items = {mainblog_items}/>
        );
    }
}
class SectionBlogs extends Component {
    render () {
        return (
            <Blogs items = {blogs_items}/>
        );
    }
}
class SectionFooter extends Component {
    render () {
        return (
            <Footer items = {footer_items}/>
        );
    }
}

ReactDom.render(<SectionHeader />, document.getElementById('header'));
ReactDom.render(<SectionReview />, document.getElementById('review'));
ReactDom.render(<SectionMainblog />, document.getElementById('mainblog'));
ReactDom.render(<SectionBlogs />, document.getElementById('blogs'));
ReactDom.render(<SectionFooter />, document.getElementById('footer'));