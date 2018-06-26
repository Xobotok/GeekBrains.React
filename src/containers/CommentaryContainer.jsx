import React, {PureComponent} from 'react';

import Commentary from '../modules/commentary/Commentary';
import {blogs_items} from '../modules/blogs/Blogs_consts';

export default class CommentaryContainer extends PureComponent {
    constructor(){
        super();
        this.items = blogs_items;

    }
    render(){
        return (<Commentary items = {this.items}/>)
    }

};
