import React, {PureComponent, Fragment} from 'react';

import Users from '../modules/users/Users';
import DataBase from '../engine/DataBase';

export default class UsersContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    load() {
        const { users } = this.state;
        DataBase.getData(`https://jsonplaceholder.typicode.com/users`,(props)=>{
            this.setState({
                users: users.concat(props),
            }, () => {

            })
        })
    }
    componentDidMount() {
        this.load();
    }

    render() {
        const { users, loading } = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <Users users={users} />}
            </Fragment>
        );
    }
};