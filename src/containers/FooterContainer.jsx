import React, { PureComponent, Fragment } from 'react';

import Footer from '../modules/footer/Footer';
import {footer_items} from '../modules/footer/Footer_consts';

export default class FooterContainer extends PureComponent {
constructor(props) {
    super(props);
    this.info = footer_items;
}
render() {
    return(
        <Footer items = {this.info}/>
    )
}
}
