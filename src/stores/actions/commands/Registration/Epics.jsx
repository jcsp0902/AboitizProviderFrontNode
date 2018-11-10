import { ajax } from 'rxjs/observable/dom/ajax';
import { concat } from 'rxjs/observable/concat';
import { of } from 'rxjs/observable/of';
// import { headers } from '../../../utils/Constants';
// import { GetUrl } from '../../../settings/Deployment';
import * as TYPE from './Types';
import {
  postCustomerRegisterError,
  postCustomerRegisterLoading,
  postCustomerRegisterSuccess,
} from '.';
import { customerAPI } from '../../../../common/constants/api' 
import { signup } from '../../../../common/constants/url' 

const urlPostCustomerRegister = customerAPI + signup;

export const postCustomerRegisterEpic = action$ =>
  action$.ofType(TYPE.POST_CUSTOMER_REGISTER_EPIC).switchMap(action => {
    const loading = of(postCustomerRegisterLoading());
    console.log(`${urlPostCustomerRegister}`, JSON.stringify(action.payload))
    debugger
    const request = ajax
      .post(`${urlPostCustomerRegister}`, JSON.stringify(action.payload))
      .map(result => postCustomerRegisterSuccess(result.response))
      .catch(error => postCustomerRegisterError(error));
    return concat(loading, request);
  });

// export default postCustomerRegisterEpic;
