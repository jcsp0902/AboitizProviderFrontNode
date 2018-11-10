import { handleActions } from 'redux-actions';
import * as ACTION from 'Actions/queries/blog/blog.action';
import Model from './model';

export default handleActions(
  {
    [ACTION.getUser]: (state, action) => ({
      ...state,
      users: state.blogs.blogs,
      loading: false,
    }),
  },
  Model,
);
