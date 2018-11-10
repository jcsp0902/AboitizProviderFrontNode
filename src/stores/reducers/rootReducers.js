import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducers';
import user from './user/users';

const rootReducers = combineReducers({
  blogs: blogReducer,
  user,
});

export default rootReducers;
