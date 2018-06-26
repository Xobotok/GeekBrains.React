import './Users.scss';

import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';



export default class Users extends PureComponent {
    constructor(props){
        super(props);

    }
    render(){

        const { users } = this.props;
        return(
            <section className="users">
                {users.map((item, index) =>
                    <div key = {index} className="users__block">
                    <Link className="users__block_title" to={'/users/'+item.id}>{item.name}</Link>
                        <p className="users__block_text">{item.username}</p>
                    </div>
                )}
            </section>
        )
    }
}


