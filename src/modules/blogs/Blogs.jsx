import React, {Component} from 'react';
import './Blogs_consts';
import './Blogs.scss';

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        if(!localStorage.getItem('blogs')) {
            localStorage.setItem('blogs', JSON.stringify(props));
        }
        this.items = JSON.parse(localStorage.getItem('blogs'));
        console.log(props);
        console.log(this.items);
    }
    render() {
       const {items} = this.items;
        return (
            <section>
            <div className="row">
                {items.map(item => <div className="col-lg-4 blogs__blog">
                    <h3 className="blogs__blog_title">{item.title}</h3>
                    <p className="blogs__blog_date">{item.date}</p>
                    <p className="blogs__blog_text">{item.text}</p>
                </div>)}
            </div>
            </section>
        )
    }
}