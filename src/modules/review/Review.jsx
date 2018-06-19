import './Review_consts';
import './Review.scss';
import React, { Component } from 'react';
import img from '../../images/ipad.png';

const getInitialState = {
    slide: 0
};

export default class Review extends Component {
    constructor(props) {
        super(props);
        this.state = getInitialState;
        this.items = props.items;
    }
    render () {
        const  {items} = this.props;
        let currentItem = items[this.state.slide];
        return (
            <section>
            <div className="row">
                <div className="review__leftside col-lg-4">
                    <h2 className="review__leftside_title">{currentItem.title} <span>{currentItem.span}</span></h2>
                    <p className="review__leftside_text">{currentItem.text}</p>
                </div>
                <div className="review__rightside col-lg-8">
                    <img src= {currentItem.image} alt="Ipad" className="review__rightside_image"/>
                </div>
            </div>
                <button onClick={this.previousSlide} className="review__slider_nextslide">&#9668;</button>
                <button onClick={this.nextSlide} className="review__slider_nextslide">&#9658;</button>
            </section>
        );
    };
    nextSlide =(e) =>{
        e.preventDefault();
        const {slide} = this.state;
        if(slide < this.items.length - 1) {
            this.setState({
                slide: slide + 1
            });
        } else {
            this.setState({
                slide: 0
            });
        }
    };
    previousSlide = (e) => {
        e.preventDefault();
        const {slide} = this.state;
        if(slide > 0) {
            this.setState({
                slide: slide - 1
            });
        } else {
            this.setState({
                slide: this.items.length - 1
            });
        }
    }
};
