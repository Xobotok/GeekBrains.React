import React, { PureComponent, Fragment } from 'react';
import Header from '../modules/header/Header';
import {navigation_list} from '../modules/header/Header_consts';

export default class HeaderContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.nav = navigation_list;
    }
    render() {
        return (
          <Header header_items = {this.nav}/>
        );
    }
}