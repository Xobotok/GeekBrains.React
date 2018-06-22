import './Review.scss';

import React, { Component } from 'react';

export default class Review extends Component {
    render () {
        const {item, next, previous} = this.props;
        return (
            <section>
            <div className="row">
                <div className="review__leftside col-lg-4">
                    <h2 className="review__leftside_title">{item.title} <span>{item.span}</span></h2>
                    <p className="review__leftside_text">{item.text}</p>
                </div>
                <div className="review__rightside col-lg-8">
                    <img src= {item.image} alt="Ipad" className="review__rightside_image"/>
                </div>
            </div>
                <button onClick={previous} className="review__slider_nextslide">&#9668;</button>
                <button onClick={next} className="review__slider_nextslide">&#9658;</button>
            </section>
        );
    };
};
