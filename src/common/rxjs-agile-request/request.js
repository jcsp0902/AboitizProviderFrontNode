import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

const ajaxCall = actions => {
  if (actions.cancel === undefined) {
    console.warn(
      'AgileRequest warn: its nice if you have a cancel action in your request',
    );
  }

  if (actions.retry === undefined) {
    console.warn(
      'AgileRequest warn: its nice if you have a retry action in your request',
    );
  }

  let requestError;

  return (
    actions.call
      // .delay(5000)
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
      })
  );
};

export default ajaxCall;
