import './style.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import Header from './containers/HeaderContainer';
import Review from './containers/ReviewContainer';
import Mainblog from './containers/MainblogContainer';
import Blogs from './containers/BlogsContainer';
import Footer from './containers/FooterContainer';

class App extends Component {
    constructor(){
        super();
    }
    render() {
        return(
         <BrowserRouter>
             <Header />
             <Review />
             <Mainblog />
             <Blogs />
             <Footer />
         </BrowserRouter>
        )
    }
}
ReactDom.render(<App />, document.body);
