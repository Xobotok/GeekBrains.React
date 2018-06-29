import { createAction } from 'redux-actions';



export const loadStarted = createAction('[Blogs] Load started');
export const loadCompleted = createAction('[Blogs] Load completed');
export const loadFailed = createAction('[Blogs] Load failed');

export const loadBlogs = (dispatch, pageNumber) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/posts?limit=10&_page=${pageNumber}`)
        .then((response) => response.json())
        .then((blogs) => {
            dispatch(loadCompleted(blogs));
        })
        .catch((error) => {
            dispatch(loadFailed(error));
        })
};