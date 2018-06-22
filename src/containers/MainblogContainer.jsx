import React, {PureComponent, Fragment} from 'react';

import Mainblog from '../modules/mainblog/Mainblog';
import {mainblog_items} from '../modules/mainblog/Mainblog_consts';

export default class MainblogContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           slide: 0
        };
        this.items = mainblog_items;
    }
    next = (e) => {
        const {slide} = this.state;
        e.preventDefault();
        if (slide < this.items.length - 1) {
            this.setState({
                slide: slide + 1
            });
        } else {
            this.setState({
                slide: 0
            });
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
            this.setState({
                slide: this.items.length - 1
            });
        }
    };
    render(){
        const {slide} = this.state;
        return(
            <Mainblog next = {this.next} previous = {this.previous} item = {this.items[slide]}/>
        )
    }
}
