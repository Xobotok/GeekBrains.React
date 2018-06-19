import React, { Component } from 'react';
import img from '../../images/mainblog.png';
import './Mainblog.scss';
const getInitialState = {
    slide: 0
};
export default class Mainblog extends Component {
    constructor(props){
        super(props);
        this.state = getInitialState;
        this.items = props.items;
    }
render(){
    const {items} = this.props;
    let currentItem = items[this.state.slide];
    return (
        <section>
        <div className="row">
            <div className="mainblog__leftside col-lg-4">
                <img src = "images/mainblog.png" alt="Main" className= "mainblog__leftside_image"/>
            </div>
            <div className="mainblog__rightside col-lg-8">
                <h4 className="mainblog__rightside_title">{currentItem.title}</h4>
                <p className="mainblog__rightside_text">{currentItem.text}</p>
            </div>
            <div className="mainblog__buttons">
                <button onClick={this.previous} className="mainblog__buttons_button">previous</button>
                <button onClick={this.next} className="mainblog__buttons_button">next</button>
            </div>

        </div>
        </section>
    );
};
    next = (e) => {
    e.preventDefault();
    const {slide} = this.state;
    if(slide < this.items.length - 1) {
        this.setState({
            slide: slide + 1
        })
    } else {
        this.setState({slide: 0});
    }
    };
    previous = (e) => {
        e.preventDefault();
        const {slide} = this.state;
        if(slide > 0) {
            this.setState({
                slide: slide - 1
            })
        } else {
            this.setState({slide: this.items.length - 1});
        }
    }
};