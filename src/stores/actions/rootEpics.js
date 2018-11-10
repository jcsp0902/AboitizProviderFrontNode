import { combineEpics } from 'redux-observable';
import * as BLOG from './queries/blog/blog.epic';
import * as Register from './commands/Registration/Epics'

const rootEpic = combineEpics(BLOG.getBlogEpic, BLOG.postBlogEpic, Register.postCustomerRegisterEpic);

export default rootEpic;
