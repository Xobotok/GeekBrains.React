import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux'

import Blogs from '../modules/blogs/Blogs';
import {loadBlogs} from '../actions/blogs';

class BlogsContainer extends PureComponent {

    componentDidMount() {
        const {load} = this.props;
        load();
    }

    render() {
        console.log(this.props);
        const { blogs, loading } = this.props;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <Blogs blogs={blogs} />}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props){
    return {
        ...props,
        loading: state.blogs.loading,
        users: state.blogs.users,
    }

}
function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        load: () => loadBlogs(dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BlogsContainer);