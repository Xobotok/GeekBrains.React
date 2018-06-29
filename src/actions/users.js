import { createAction } from 'redux-actions';



export const loadStarted = createAction('[Users] Load started');
export const loadCompleted = createAction('[Users] Load completed');
export const loadFailed = createAction('[Users] Load failed');

export const loadUsers = (dispatch) => {
  dispatch(loadStarted());
  fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
      dispatch(loadCompleted(users));
      })
      .catch((error) => {
      dispatch(loadFailed(error));
      })
};