import './Blogs.scss';

import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Blogs extends Component {
    render() {
       const {blogs, onLoadMore} = this.props;
       const href = "blogs/" + blogs.id;
        return (
            <section>
            <div className="row">
                {blogs.map((item, index) => <div key = {index} className="col-lg-6 blogs__blog">
                    <Link to = {href} className="blogs__blog_title">{item.title}</Link>
                    <p className="blogs__blog_text">{item.body}</p>
                </div>)}
                <button onClick={onLoadMore}>Ещё блоги</button>
            </div>
            </section>
        )
    }
}
