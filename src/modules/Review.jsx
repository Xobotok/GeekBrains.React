/**
 * Created by Xobat on 15.06.2018.
 */
import './Review_consts';
import React, { Component } from 'react';
import img from '../images/ipad.png';

export default class Review extends Component {
    render () {
        const  {items} = this.props;
        return (
            <div className="row">
                <div className="review__leftside col-lg-4">
                    <h2 className="review__leftside_title">{items.title} <span>{items.span}</span></h2>
                </div>
                <div className="review__rightside col-lg-8">
                    <img src= {img} alt="Ipad" className="review__rightside_image"/>
                </div>
            </div>
        );
    };
};
