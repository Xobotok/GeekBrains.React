import './Commentary.scss';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';

export default class Commentary extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const {items} = this.props;
        return(
          <section>
              <div className="row">
              {items.map((item, index) =>
                  <div key = {index} className="col-lg-12 blogs__blog blog__block">
                      <Link to = {"blogs/"+item.id} className="blogs__blog_title">{item.title}</Link>
                      <p className="blogs__blog_date">{item.date}</p>
                      <p className="blogs__blog_text blogs__blog_line">{item.text}</p>
                      {
                          item.commentary.map((item, index) =>
                              <div key = {index} className="blog__commentary">
                                  <p className="blog__commentary_author">{item.author}</p>
                                  <p className="blog__commentary_date">{new Date(Date.parse(item.date)).toDateString()}</p>
                                  <p className="blog__commentary_text">{item.text}</p>
                              </div>
                          )
                      }
                  </div>)}
              </div>
          </section>
        );
    }
}