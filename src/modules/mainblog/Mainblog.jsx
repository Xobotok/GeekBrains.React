import './Mainblog.scss';

import React, { Component } from 'react';

export default class Mainblog extends Component {
render(){
    const {item, next, previous} = this.props;
    return (
        <section>
        <div className="row">
            <div className="mainblog__leftside col-lg-4">
                <img src = "images/mainblog.png" alt="Main" className= "mainblog__leftside_image"/>
            </div>
            <div className="mainblog__rightside col-lg-8">
                <h4 className="mainblog__rightside_title">{item.title}</h4>
                <p className="mainblog__rightside_text">{item.text}</p>
            </div>
            <div className="mainblog__buttons">
                <button onClick={previous} className="mainblog__buttons_button">previous</button>
                <button onClick={next} className="mainblog__buttons_button">next</button>
            </div>

        </div>
        </section>
    );
};
};