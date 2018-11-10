import * as TYPES from './types';
import * as ACTION from './blog.action';
import { jsonplacehoder } from 'Common/constants/api';
import { headers } from 'Common/constants/headers';

const getBlogUrl = `${jsonplacehoder}/posts/1`;

export const getBlogEpic = (action$, state$, { getRequest }) => {
  return action$.ofType(TYPES.GET_BLOG_EPIC).switchMap(action => {
    // objection action
    const actions = {
      action: action$,
      loading: ACTION.getBlogLoading,
      success: [ACTION.getBlogSuccess],
      error: ACTION.getBlogError,
      cancel: TYPES.GET_BLOG_CANCEL,
      url: getBlogUrl,
      retry: error => {
        return 404 === error.status;
      },
    };

    return getRequest(actions);
  });
};

const postBlogUrl = 'https://jsonplaceholder.typicode.com/posts';
export const postBlogEpic = (action$, state$, { postRequest }) =>
  action$.ofType(TYPES.POST_BLOG_EPIC).switchMap(action => {
    const ObjectActions = {
      action: action$,
      url: `${postBlogUrl}/${action.payload.id}`,
      headers,
      loading: ACTION.postBlogLoading(),
      success: ACTION.postBlogSuccess,
      cancel: TYPES.POST_BLOG_CANCEL,
      error: ACTION.postBlogError,
      formBody: action.payload,
      retry: error => {
        return 404 === error.status;
      },
    };

    return postRequest(ObjectActions);
  });

// less code but having an issue in action.paylod, not ideal
// export const getBlogEpic = (action$, state$, { getRequest }) => {
//   const object = {
//     action: action$,
//     loading: ACTION.getBlogLoading,
//     success: [
//       ACTION.getBlogSuccess,
//       ACTION.getBlogSuccess,
//       ACTION.getBlogSuccess,
//     ],
//     error: ACTION.getBlogError,
//     cancel: TYPES.GET_BLOG_CANCEL,
//     epic: TYPES.GET_BLOG_EPIC,
//     url: getBlogUrl,
//     retry: error => {
//       return 404 === error.status;
//     },
//   };

//   return getRequest(object);
// };
