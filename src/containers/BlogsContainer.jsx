import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux'

import Blogs from '../modules/blogs/Blogs';
import {loadBlogs} from '../actions/blogs';

class BlogsContainer extends PureComponent {
    handleLoadMore = () => {
        const { load } = this.props;
        load();
    };
    componentDidMount() {
        const {load, blogs} = this.props;
        if(!blogs.length) {
            load();
        }
    }

    render() {
        const { blogs, loading } = this.props;
        return (
            <Fragment>
                {loading && !blogs.length ? <div>Loading...</div> : <Blogs onLoadMore={this.handleLoadMore} blogs={blogs} />}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props){
    return {
        ...props,
        page: state.blogs.page,
        loading: state.blogs.loading,
        blogs: state.blogs.blogs,
    };
}
function mergeMap(stateProps, dispatchProps, ownProps) {
    return {
        ...stateProps,
        ...ownProps,
        load: () => dispatchProps.load(stateProps.page),
    }
}
function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        load: loadBlogs.bind(null, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps,mergeMap)(BlogsContainer);