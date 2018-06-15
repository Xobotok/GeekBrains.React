import React, { Component } from 'react';
import img from '../../images/mainblog.png';

export default class Mainblog extends Component {
render(){
    const {items} = this.props;
    return (
        <section>
        <div className="row">
            <div className="mainblog__leftside col-lg-4">
                <img src = {img} alt="Main" className= "mainblog__leftside_image"/>
            </div>
            <div className="mainblog__rightside col-lg-8">
                <h4 className="mainblog__rightside_title">{items.title}</h4>
                <p className="mainblog__rightside_text">{items.text}</p>
                <button className="mainblog_rightside_button">previous</button>
                <button className="mainblog_rightside_button">next</button>
            </div>
        </div>
        </section>
    );
};
};