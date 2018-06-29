import { createAction } from 'redux-actions';



export const loadStarted = createAction('[Blogs] Load started');
export const loadCompleted = createAction('[Blogs] Load completed');
export const loadFailed = createAction('[Blogs] Load failed');

export const loadBlogs = (dispatch) => {
    dispatch(loadStarted());
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((users) => {
            dispatch(loadCompleted(users));
        })
        .catch((error) => {
            dispatch(loadFailed(error));
        })
};