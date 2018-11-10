import { ajax } from 'rxjs/observable/dom/ajax';
import { concat } from 'rxjs/observable/concat';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

const ajaxCall = actions => {
  let requestError;

  return actions.call
    .delay(5000)
    .takeUntil(actions.action.ofType(actions.cancel))
    .flatMap(result => {
      return actions.success.map(s => {
        return s(result.response);
      });
    })
    .retryWhen(error => {
      return (
        error
          .flatMap(error => {
            requestError = error;
            if (actions.retry !== undefined) {
              /*
              if you have error status retry
            */
              if (actions.retry(error)) {
                return of(error.status);
              }
              return _throw(error.status);
            } else {
              /* 
              else all error will retry 
            */
              return of(error.status);
            }
          })
          // we decide to retry 5x
          .take(5)
          .concat(_throw('Sorry, there was an error (after 5 retries)'))
      );
    })
    .catch(error => {
      return of(actions.error(error));
    });
};

const helper = actions => {
  return actions.action.ofType(actions.epic).switchMap(() => {
    const loading = of(actions.loading());
    const call = ajax.get(actions.url, actions.headers);

    return concat(
      loading,
      ajaxCall({
        ...actions,
        call,
      }),
    );
  });
};

export default helper;
