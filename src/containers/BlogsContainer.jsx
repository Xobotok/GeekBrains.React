import React, { PureComponent, Fragment } from 'react';

import Blogs from '../modules/blogs/Blogs';
import {blogs_items} from '../modules/blogs/Blogs_consts';

export default class BlogsContainer extends PureComponent {
constructor(props) {
    super(props);
    this.state = {
        loading: false,
        items: 6,
        page: 1,
        blogs: []
    }
}
load() {
    const { items, blogs, page} = this.state;
    let newArray = [];
    for(let i = blogs.length; i < items * page && i < blogs_items.length; i++) {
        newArray.push(blogs_items[i]);
    }
    this.setState({
        loading: true,
        blogs: blogs.concat(newArray),
        page: page + 1
    });

}
componentDidMount(){
    this.load();
}
handleLoadMore = () => {
    this.load();
};
render() {
    const { blogs } = this.state;
    return (
        <Fragment>
            <Blogs onLoadMore = {this.handleLoadMore} blogs = {blogs}/>
        </Fragment>
    );
}
}
