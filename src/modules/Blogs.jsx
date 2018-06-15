import React, {Component} from 'react';
import './Blogs_consts';

export default class Blogs extends Component {
    render() {
       const {items} = this.props;
        return (
            <div className="row">
                {items.map(item => <div className="col-lg-4 blogs__blog">
                    <h5 className="blogs__blog_title">{item.title}</h5>
                    <p className="blogs__blog_date">{item.date}</p>
                    <p className="blogs__blog_text">{item.text}</p>
                </div>)}
            </div>
        )
    }
}
