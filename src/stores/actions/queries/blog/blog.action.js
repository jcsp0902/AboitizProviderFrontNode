import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getUser = createAction(TYPES.GET_USER);
export const getBlogEpic = createAction(TYPES.GET_BLOG_EPIC);
export const getBlogLoading = createAction(TYPES.GET_BLOG_LOADING);
export const getBlogSuccess = createAction(TYPES.GET_BLOG_SUCCESS);
export const getBlogError = createAction(TYPES.GET_BLOG_ERROR);
export const getBlogCancel = createAction(TYPES.GET_BLOG_CANCEL);

export const postBlogEpic = createAction(TYPES.POST_BLOG_EPIC);
export const postBlogLoading = createAction(TYPES.POST_BLOG_LOADING);
export const postBlogSuccess = createAction(TYPES.POST_BLOG_SUCCESS);
export const postBlogError = createAction(TYPES.POST_BLOG_ERROR);
export const postBlogCancel = createAction(TYPES.POST_BLOG_CANCEL);
