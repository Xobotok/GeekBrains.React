import React, {PureComponent, Fragment} from 'react';

import Review from '../modules/review/Review';
import {review_items} from '../modules/review/Review_consts';

export default class ReviewContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            slide: 0
        };
        this.items = review_items;
    }
    next = (e) => {
        const {slide} = this.state;
        e.preventDefault();
        if (slide < this.items.length - 1) {
            this.setState({
                slide: slide + 1,
            })
        } else {
            this.setState({
                slide: 0
            })
        }
    };
    previous = (e) => {
        const {slide} = this.state;
        e.preventDefault();
        if (slide > 0) {
            this.setState({
                slide: slide - 1,
            })
        } else {
            this.setState({
                slide: this.items.length - 1
            })
        }
    }
    render() {
        const {slide} = this.state;
        return (
            <Review next = {this.next} previous = {this.previous} item = {this.items[slide]}/>
        )
    }
}
