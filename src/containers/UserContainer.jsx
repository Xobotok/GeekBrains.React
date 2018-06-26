import React, {PureComponent, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import User from '../modules/users/user/User';
import DataBase from '../engine/DataBase';

export default class UserContainer extends PureComponent{
    constructor(props) {
        super(props);
        console.log(props);
    }
    render(){
        const id = this.props;

        return(

            <User/>
        )
    }
}