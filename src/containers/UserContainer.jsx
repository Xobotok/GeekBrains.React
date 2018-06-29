import React, { PureComponent, Fragment } from 'react';

import User from '../modules/users/user/User';

export default class UserListContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: {}
        };
    }

    load() {
        const { pathname } = this.props.location;
        let uid = pathname.split('/');
        const id = uid[uid.length - 1];


        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((user) => {
                this.setState({
                    loading: false,
                    user
                })
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    componentDidMount() {
        this.load();
    }

    render() {
        const { user, loading } = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <User user={user} />}
            </Fragment>
        );
    }
}