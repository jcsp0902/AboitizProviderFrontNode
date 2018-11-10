import { ajax } from 'rxjs/observable/dom/ajax';
import { concat } from 'rxjs/observable/concat';
import { of } from 'rxjs/observable/of';
import ajaxCall from './request';

const handleLoadingWarning = loading => {
  if (loading === undefined) {
    console.error(
      'AgileRequest error: loading action is required for the standard request',
    );
  }
};

const getRequest = actions => {
  handleLoadingWarning(actions.loading);
  const call = ajax.get(actions.url, actions.headers);
  return concat(of(actions.loading()), ajaxCall({ ...actions, call }));
};

const postRequest = actions => {
  handleLoadingWarning(actions.loading);
  const call = ajax.post(actions.url, actions.formBody, actions.header);
  return concat(of(actions.loading), ajaxCall({ ...actions, call }));
};

// less code but having an issue in action.paylod, not ideal
// const getRequest = actions => {
//   if (actions.loading === undefined) {
//     console.error(
//       'AgileRequest error: loading action is required for the standard request',
//     );
//   }

//   return actions.action.ofType(actions.epic).switchMap(() => {
//     const loading = of(actions.loading());
//     const call = ajax.get(actions.url, actions.headers);

//     return concat(
//       loading,
//       ajaxCall({
//         ...actions,
//         call,
//       }),
//     );
//   });
// };

export { getRequest, postRequest };
