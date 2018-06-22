import React, {Component} from 'react';

export default class Footer extends Component{
    render() {
        const {items} = this.props;
        return(
            <section>
            <div className="footer__rights">
                <p className="footer__rights_text">{items.text}</p>
            </div>
            </section>
        )
    }
}
