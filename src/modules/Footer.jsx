/**
 * Created by Xobat on 15.06.2018.
 */
import React, {Component} from 'react';

export default class Footer extends Component{
    render() {
        const {items} = this.props;
        return(
            <div className="footer__rights">
                <p className="footer__rights_text">{items.text}</p>
            </div>
        )
    }
}