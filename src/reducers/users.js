import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from '../actions/users';


const initialState = {
  loading: false,
  error: null,
  users: [],
  page: 1
};

export default handleActions({
  [loadStarted]: (state) => {
    return {
        ...state,
        error: null,
        loading: true,
    };
  },
    [loadCompleted]: (state, action) => {
    return {
        ...state,
        users: action.payload,
        loading: false,
    };
    },
    [loadFailed]: (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.payload,
    }
    }
}, initialState);