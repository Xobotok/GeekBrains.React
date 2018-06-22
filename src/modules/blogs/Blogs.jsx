import './Blogs.scss';

import React, {Component} from 'react';


export default class Blogs extends Component {
    render() {
       const {blogs, onLoadMore} = this.props;
        return (
            <section>
            <div className="row">
                {blogs.map((item, index) => <div key = {index} className="col-lg-4 blogs__blog">
                    <h3 className="blogs__blog_title">{item.title}</h3>
                    <p className="blogs__blog_date">{item.date}</p>
                    <p className="blogs__blog_text">{item.text}</p>
                </div>)}
                <button onClick={onLoadMore}>Ещё блоги</button>
            </div>
            </section>
        )
    }
}